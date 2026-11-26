package com.example.dedus.auth;

import com.example.dedus.auth.exeption.EmailAlreadyInUseException;
import com.example.dedus.auth.exeption.InvalidEmailCodeException;
import com.example.dedus.auth.exeption.InvalidPasswordException;
import com.example.dedus.auth.request.LoginRequest;
import com.example.dedus.auth.request.RegisterRequest;
import com.example.dedus.auth.request.VerifyEmailRequest;
import com.example.dedus.auth.verification.EmailVerificationCodeRepository;
import com.example.dedus.user.*;
import jakarta.transaction.Transactional;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.example.dedus.auth.verification.EmailVerificationCode;
import java.security.SecureRandom;
import java.util.Locale;

import java.time.Instant;
import java.util.Objects;

@Service
public class AuthService {

    private static final String TOKEN_TYPE = "Bearer";
    private static final SecureRandom CODE_RANDOM = new SecureRandom();

    private final UserRepository userRepository;
    private final EmailVerificationCodeRepository emailVerificationCodeRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private static final long CODE_LIFETIME_SECONDS = 600;
    private static final long RESEND_COOLDOWN_SECONDS = 60;

    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtService jwtService,
                       EmailVerificationCodeRepository emailVerificationCodeRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.emailVerificationCodeRepository = emailVerificationCodeRepository;
    }

    @Transactional
    public void register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.email())) {
            throw new EmailAlreadyInUseException();
        }

        User user = new User(
                request.email(),
                passwordEncoder.encode(request.password())
        );
        userRepository.save(user);

        String rawCode = String.format(Locale.ROOT, "%06d",
                CODE_RANDOM.nextInt(1_000_000));

        emailVerificationCodeRepository.save(new EmailVerificationCode(
                user,
                passwordEncoder.encode(rawCode),
                Instant.now().plusSeconds(600)
        ));
    }

    @Transactional
    public AuthResponse login(LoginRequest request) {
        if (!userRepository.existsByEmail(request.email())) {
            throw new EmailAlreadyInUseException();
        }
        User user = userRepository.findByEmail(request.email());
        if (!passwordEncoder.matches(request.password(), user.getPasswordHash())) {
            throw new InvalidPasswordException();
        }

        String token = jwtService.createToken(user);

        return new AuthResponse(
                token,
                TOKEN_TYPE,
                jwtService.getExpirationSeconds()
        );
    }

    @Transactional(dontRollbackOn = InvalidEmailCodeException.class)
    public void verifyEmail(VerifyEmailRequest request) {
        User user = userRepository.findByEmail(request.email());
        if (user == null || user.isEmailVerified()) {
            throw new InvalidEmailCodeException();
        }

        var code = emailVerificationCodeRepository.findById(user.getId())
                .orElseThrow(InvalidEmailCodeException::new);

        if (!Instant.now().isBefore(code.getExpiresAt())
                || code.getFailedAttempts() >= 5) {
            throw new InvalidEmailCodeException();
        }

        if (!passwordEncoder.matches(request.code(), code.getCodeHash())) {
            code.recordFailedAttempt();
            throw new InvalidEmailCodeException();
        }

        user.markEmailVerified();
        emailVerificationCodeRepository.delete(code);
    }

    @Transactional
    public void resendVerificationCode(LoginRequest request) {
        User user = userRepository.findByEmailForUpdate(request.email()).orElse(null);
        if (user == null || user.isEmailVerified()
                || !passwordEncoder.matches(request.password(), user.getPasswordHash())) {
            return;
        }

        var currentCode = emailVerificationCodeRepository.findById(user.getId()).orElse(null);
        Instant now = Instant.now();

        if (currentCode != null) {
            Instant nextAllowedAt = currentCode.getExpiresAt()
                    .minusSeconds(CODE_LIFETIME_SECONDS)
                    .plusSeconds(RESEND_COOLDOWN_SECONDS);

            if (now.isBefore(nextAllowedAt)) {
                return;
            }
        }

        issueVerificationCode(user, currentCode, now);
    }

    private void issueVerificationCode(User user, EmailVerificationCode currentCode, Instant now) {
        String rawCode;
        do {
            rawCode = String.format(Locale.ROOT, "%06d", CODE_RANDOM.nextInt(1_000_000));
        } while (currentCode != null
                && passwordEncoder.matches(rawCode, currentCode.getCodeHash()));

        String codeHash = passwordEncoder.encode(rawCode);
        Instant expiresAt = now.plusSeconds(CODE_LIFETIME_SECONDS);

        if (currentCode == null) {
            emailVerificationCodeRepository.save(new EmailVerificationCode(user, codeHash, expiresAt));
        } else {
            currentCode.replaceCode(codeHash, expiresAt);
        }
    }

}

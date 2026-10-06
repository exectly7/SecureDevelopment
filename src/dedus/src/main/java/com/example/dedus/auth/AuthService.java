package com.example.dedus.auth;

import com.example.dedus.user.*;
import jakarta.transaction.Transactional;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private static final String TOKEN_TYPE = "Bearer";

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtService jwtService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    @Transactional
    public AuthResponse register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.email())) {
            throw new EmailAlreadyInUseException();
        }
        User user = new User(request.email(), passwordEncoder.encode(request.password()));
        userRepository.save(user);

        String token = jwtService.createToken(user);

        return new AuthResponse(
                token,
                TOKEN_TYPE,
                jwtService.getExpirationSeconds()
        );
    }

}

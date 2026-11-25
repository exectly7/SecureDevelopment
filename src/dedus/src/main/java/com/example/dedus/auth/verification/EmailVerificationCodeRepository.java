package com.example.dedus.auth.verification;

import jakarta.persistence.LockModeType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;

import java.util.Optional;

public interface EmailVerificationCodeRepository
        extends JpaRepository<EmailVerificationCode, Long> {

    @Override
    @Lock(LockModeType.PESSIMISTIC_WRITE)
    Optional<EmailVerificationCode> findById(Long userId);
}
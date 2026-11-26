package com.example.dedus.auth.exeption;

public class InvalidEmailCodeException extends RuntimeException {
    public InvalidEmailCodeException() {
        super("Неверный или просроченный код подтверждения");
    }
}

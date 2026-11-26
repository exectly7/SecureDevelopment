package com.example.dedus.auth.exeption;

public class InvalidPasswordException extends RuntimeException {
    public InvalidPasswordException() {
        super("Incorrect password");
    }
}

package com.example.dedus.auth;

public class InvalidPasswordException extends RuntimeException {
    public InvalidPasswordException() {
        super("Incorrect password");
    }
}

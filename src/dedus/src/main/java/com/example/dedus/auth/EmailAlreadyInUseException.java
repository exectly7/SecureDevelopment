package com.example.dedus.auth;

public class EmailAlreadyInUseException extends RuntimeException {
    public EmailAlreadyInUseException() {
        super("Email is already in use by other account");
    }
}

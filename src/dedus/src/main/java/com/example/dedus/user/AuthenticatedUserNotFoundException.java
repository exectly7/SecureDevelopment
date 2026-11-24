package com.example.dedus.user;

public class AuthenticatedUserNotFoundException extends RuntimeException {
    public AuthenticatedUserNotFoundException() {
        super("Authenticated user no longer exists");
    }
}

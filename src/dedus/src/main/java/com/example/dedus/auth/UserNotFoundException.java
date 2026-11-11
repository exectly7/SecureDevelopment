package com.example.dedus.auth;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException() {
        super("User with this email does not exist");
    }
}

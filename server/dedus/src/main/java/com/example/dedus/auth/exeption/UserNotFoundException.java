package com.example.dedus.auth.exeption;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException() {
        super("User does not exist");
    }
}

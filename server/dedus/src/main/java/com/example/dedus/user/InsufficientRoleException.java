package com.example.dedus.user;

public class InsufficientRoleException extends RuntimeException {
    public InsufficientRoleException(UserRole role) {
        super("You need " + role.toString() + " role to perform this operation.");
    }
}

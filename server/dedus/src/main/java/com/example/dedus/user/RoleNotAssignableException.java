package com.example.dedus.user;

public class RoleNotAssignableException extends RuntimeException {
    public RoleNotAssignableException(UserRole role) {
        super("You can not assign " + role.toString());
    }
}

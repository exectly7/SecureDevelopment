package com.example.dedus.auth;

public record AuthResponse(
        String token,
        String tokenType,
        Long expiresIn
) { }

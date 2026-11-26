package com.example.dedus.user;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PutMapping("/{userId}/roles/{role}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void putRole(
            @AuthenticationPrincipal Jwt jwt,
            @PathVariable Long userId,
            @PathVariable UserRole role
    ) {
        Long actorId = Long.valueOf(Objects.requireNonNull(jwt.getSubject()));
        userService.giveRole(actorId, userId, role);
    }

    @DeleteMapping("/{userId}/roles/{role}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteRole(
            @AuthenticationPrincipal Jwt jwt,
            @PathVariable Long userId,
            @PathVariable UserRole role
    ) {
        Long actorId = Long.valueOf(Objects.requireNonNull(jwt.getSubject()));
        userService.removeRole(actorId, userId, role);
    }
}

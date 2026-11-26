package com.example.dedus.user;

import com.example.dedus.auth.exeption.UserNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Transactional
    public void giveRole(Long actorId, Long userId, UserRole role) {
        User actor = userRepository.findUserById(actorId);
        if (actor == null) {
            throw new AuthenticatedUserNotFoundException();
        }
        if (!actor.getRole().contains(UserRole.SUPERUSER)) {
            throw new InsufficientRoleException(UserRole.SUPERUSER);
        }
        if (role != UserRole.ADMIN && role != UserRole.ENGINEER) {
            throw new RoleNotAssignableException(role);
        }
        User user = userRepository.findUserById(userId);
        if (user == null) {
            throw new UserNotFoundException();
        }
        user.addRole(role);
        userRepository.save(user);
    }

    @Transactional
    public void removeRole(Long actorId, Long userId, UserRole role) {
        User actor = userRepository.findUserById(actorId);
        if (actor == null) {
            throw new AuthenticatedUserNotFoundException();
        }
        if (!actor.getRole().contains(UserRole.SUPERUSER)) {
            throw new InsufficientRoleException(UserRole.SUPERUSER);
        }
        if (role != UserRole.ADMIN && role != UserRole.ENGINEER) {
            throw new RoleNotAssignableException(role);
        }
        User user = userRepository.findUserById(userId);
        if (user == null) {
            throw new UserNotFoundException();
        }
        if (user.getRole().contains(role)) {
            user.removeRole(role);
            userRepository.save(user);
        }
    }
}

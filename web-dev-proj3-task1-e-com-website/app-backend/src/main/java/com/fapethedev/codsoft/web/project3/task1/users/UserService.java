package com.fapethedev.codsoft.web.project3.task1.users;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public User findByUsername(String username) {
        return userRepository.findByUsernameIgnoreCase(username)
                .orElse(null);
    }

    public User findById(Long id) {
        return userRepository.findById(id)
                .orElse(null);
    }

    public List<User> findAllUsers() { return userRepository.findAll(); }
}

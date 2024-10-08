package com.fapethedev.codsoft.web.project3.task1.users;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class AuthService implements UserDetailsService, UserDetailsManager
{
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        return userRepository.findByUsernameIgnoreCase(username)
                .orElseThrow(() -> new UsernameNotFoundException(""));
    }

    @Override
    public void createUser(UserDetails userDetails)
    {
        var username = userDetails.getUsername();
        var password = passwordEncoder.encode(userDetails.getPassword());

        userRepository.save(new User(username, password));
    }

    @Override
    public void updateUser(UserDetails user) {

    }

    @Override
    public void deleteUser(String username) {

    }

    @Override
    public void changePassword(String oldPassword, String newPassword) {

    }

    @Override
    public boolean userExists(String username) {
        return userRepository.findByUsernameIgnoreCase(username).isPresent();
    }
}

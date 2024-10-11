package com.fapethedev.codsoft.web.project3.task1.users;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;
import java.text.MessageFormat;

@Slf4j
@RestController
public class RegisterController {

	private final AuthenticationManager authenticationManager;
	private final UserDetailsManager userDetailsManager;

	public RegisterController(AuthenticationManager authenticationManager, UserDetailsManager userDetailsManager) {
		this.authenticationManager = authenticationManager;
		this.userDetailsManager = userDetailsManager;
	}

	@PostMapping(path = {"/register", "/register/"})
	public ResponseEntity<AuthResponse> register(@RequestBody AuthRequest registerRequest) {
		var username = registerRequest.username();
		var password = registerRequest.password();

		User user = new User(username, password);

		if(userDetailsManager.userExists(username))
			return ResponseEntity.status(HttpStatus.FORBIDDEN).body(
					new AuthResponse(MessageFormat.format("User with username {0} already been registered", username))
			);

		userDetailsManager.createUser(user);

		Authentication authenticationRequest =
			UsernamePasswordAuthenticationToken.unauthenticated(registerRequest.username(), registerRequest.password());
		Authentication authenticationResponse =
			this.authenticationManager.authenticate(authenticationRequest);

		SecurityContext context = SecurityContextHolder.createEmptyContext();

		context.setAuthentication(authenticationResponse);

		SecurityContextHolder.getContextHolderStrategy().setContext(context);

		return ResponseEntity.created(URI.create("/api/users/"))
				.body(new AuthResponse(MessageFormat.format("User: {0} is created", username)));
	}

}
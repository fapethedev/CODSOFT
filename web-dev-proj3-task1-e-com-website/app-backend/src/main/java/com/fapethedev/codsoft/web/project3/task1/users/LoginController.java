package com.fapethedev.codsoft.web.project3.task1.users;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
public class LoginController {

	private final AuthenticationManager authenticationManager;

	public LoginController(AuthenticationManager authenticationManager) {
		this.authenticationManager = authenticationManager;
	}

	@PostMapping(path = {"/login", "/login/"})
	public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest loginRequest) {
		Authentication authenticationRequest =
			UsernamePasswordAuthenticationToken.unauthenticated(loginRequest.username(), loginRequest.password());
		Authentication authenticationResponse = null;

		try
		{
			authenticationResponse =
					this.authenticationManager.authenticate(authenticationRequest);

			SecurityContext context = SecurityContextHolder.createEmptyContext();

			context.setAuthentication(authenticationResponse);

			SecurityContextHolder.getContextHolderStrategy().setContext(context);

			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		}
		catch (AuthenticationException e)
		{
			log.info(e.getMessage());

			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new AuthResponse("Incorrect Auth Credentials"));

		}
	}
}
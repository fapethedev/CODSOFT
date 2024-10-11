package com.fapethedev.codsoft.web.project3.task1.main;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping(path = "/")
    public ResponseEntity<String> welcome()
    {
        return ResponseEntity.ok("Welcome To the E-Commerce Application");
    }
}

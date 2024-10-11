package com.fapethedev.codsoft.web.project3.task1.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@AllArgsConstructor
@Getter @Setter @ToString
public class ErrorDetails {

    private LocalDateTime timestamp;
    private String message;
    private String details;
}

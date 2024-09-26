package com.fapethedev.codsoft.java.game.quiz;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class QuizRunner implements CommandLineRunner
{
    private final QuizService quizService;

    @Override
    public void run(String... args) throws Exception
    {
        quizService.startQuiz();
    }
}

package com.fapethedev.codsoft.java.numbergame.runners;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Random;
import java.util.Scanner;

@Component
public class GameRunner implements CommandLineRunner
{
    private final Scanner scanner = new Scanner(System.in);
    private final int maxAttempts = 10;

    @Override
    public void run(String... args) throws Exception
    {
        boolean playAgain = true;

        System.out.println("WELCOME TO THE NUMBER GAME");

        var game = new Game(scanner, maxAttempts);

        while (playAgain)
        {
            game.play();
            playAgain = game.askToPlayAgain();
        }

        System.out.println("Thanks for playing");
    }
}

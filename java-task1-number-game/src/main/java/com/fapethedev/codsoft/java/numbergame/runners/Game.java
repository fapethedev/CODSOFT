package com.fapethedev.codsoft.java.numbergame.runners;

import lombok.Getter;

import java.util.Random;
import java.util.Scanner;

/**
 * <p>An abstract of a game party in the number game application.</p>
 *
 * @author <a href="https://github.com">Fapethedev</a>
 */
public class Game
{
    private final int maxAttempts;
    private final Scanner input;

    @Getter
    private int score;
    private int attempts;

    public Game(Scanner input, int maxAttempts) {
        this.maxAttempts = maxAttempts;
        this.input = input;
        this.attempts = 0;
        this.score = 1000;
    }

    /**
     * <p>Just play the game.</p>
     */
    public void play()
    {
        attempts = guess();

        score = score / attempts;
        System.out.println("Your score is " + score);
    }

    private int guess()
    {
        int randomNumber = generateRandomNumber(1, 100);
        boolean guessedCorrectly = false;

        System.out.println("Guess the secret number in the range [1, 100] :");

        while (!guessedCorrectly && attempts < maxAttempts) {
            int userGuess = getUserGuess();
            attempts++;
            guessedCorrectly = checkGuess(userGuess, randomNumber);
        }

        if (!guessedCorrectly) {
            System.out.println("Sorry, you have exhausted all your attempts. The number was : " + randomNumber);
        }

        return attempts;
    }

    /**
     * <p>Gets the user input.</p>
     *
     * @return the user input.
     */
    private int getUserGuess() {
        System.out.print("Your number : ");
        return input.nextInt();
    }

    /**
     * <p>Get feedback from the player about playing another party.</p>
     *
     * @return True if the player want another party otherwise false.
     */
    public boolean askToPlayAgain()
    {
        System.out.print("Do you want to play another party ? (y/n) : ");

        boolean response = input.next().equalsIgnoreCase("y");

        if(response)
        {
            score = 1000;
            attempts = 0;
        }

        return response;
    }

    /**
     * <p>Check if the player enter the right number.</p>
     *
     * @param userGuess the number inter by the user.
     * @param randomNumber the number to find.
     * @return True if the player finds the number otherwise false.
     */
    private boolean checkGuess(int userGuess, int randomNumber)
    {
        if (userGuess < randomNumber)
        {
            System.out.println("Too lower !");
            return false;
        }
        else if (userGuess > randomNumber)
        {
            System.out.println("Too higher !");
            return false;
        }
        else
        {
            System.out.println("Congratulations, you successfully guess the number !");
            return true;
        }
    }

    /**
     * <p>Generate a random integer in the range of a max and a min value.</p>
     *
     * @param min the minimum value.
     * @param max the maximum value.
     * @return a random number between the
     * max and min value witch will serve as the secret number.
     */
    private int generateRandomNumber(int min, int max) {
        return new Random().nextInt((max - min) + 1) + min;
    }

}

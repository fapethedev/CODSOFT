package com.fapethedev.codsoft.java.game.quiz;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.PipedInputStream;
import java.io.PipedOutputStream;
import java.util.List;
import java.util.Scanner;
import java.util.concurrent.*;
import java.util.concurrent.atomic.AtomicBoolean;

@Service
@Slf4j
public class QuizService
{
    private int score = 0;
    private Scanner scanner;
    private final int timePerQuestion = 30;
    private final QuestionProvider provider;
    private List<Question> questions;

    public QuizService(QuestionProvider provider) {
        this.provider = provider;
    }

    /**
     * <p>Begin the quiz</p>
     */
    public void startQuiz() {
        System.out.println("\n Welcome to the Quiz! \n".toUpperCase());
        System.out.println("You have " + timePerQuestion + " seconds to answer each question. \n");
        System.out.println("------------------------------------------------------------ \n\n");

        questions = provider.loadQuestions().stream().limit(10).toList();

        questions.forEach(question -> {
            try {
                System.out.println();
                this.askQuestion(question, questions.indexOf(question) + 1);
            } catch (Exception e){
                log.warn(e.getMessage());
            }
        });

        displayResults();
    }

    /**
     * <p>Ask a question to the player.
     * Each question has a limited time for any response.</p>
     *
     * @param question the question to display
     * @param position the question's position
     */
    private void askQuestion(Question question, int position) throws IOException {
        System.out.println(position + " - " + question.text());

        System.out.println();

        question.options().stream()
                .map(s -> question.options().indexOf(s) + 1 + ".  " + s)
                .forEach(System.out::println);

        System.out.println();

        // Create a PipedInputStream and PipedOutputStream to simulate input
        PipedInputStream pipedInput = new PipedInputStream();
        PipedOutputStream pipedOutput = new PipedOutputStream(pipedInput);
        scanner = new Scanner(pipedInput); // Set the scanner to use the piped input

        // Create a new ScheduledExecutorService to handle the timer
        try (ScheduledExecutorService executorService = Executors.newScheduledThreadPool(1);
             ExecutorService inputExecutor = Executors.newSingleThreadExecutor())
        {
            AtomicBoolean answered = new AtomicBoolean(false);

            // Schedule the timer to run after the allotted time
            ScheduledFuture<?> timerTask = executorService.schedule(() -> {
                if (!answered.get()) {
                    System.out.println("\nTime's up!");
                    try {
                        pipedOutput.write("\n".getBytes()); // Simulate an empty input to unblock Scanner
                    } catch (Exception e) {
                        log.error(e.getMessage());
                    }
                    answered.set(true);
                }
            }, timePerQuestion, TimeUnit.SECONDS);

            // Thread to get user input
            Future<Integer> userInputTask = inputExecutor.submit(() -> {
                int userAnswer = -1;
                while (!answered.get()) {
                    System.out.print("Your answer (1-4): ");
                    if (scanner.hasNextInt()) {
                        userAnswer = scanner.nextInt();
                        if (userAnswer >= 1 && userAnswer <= 4) {
                            answered.set(true); // Set answered to true when valid input is received
                        } else {
                            System.out.println("Invalid answer, please choose an option between 1 and 4.");
                        }
                    } else {
                        System.out.println("Please enter a valid number.");
                        scanner.next(); // Clear the invalid input
                    }
                }
                return userAnswer;
            });

            try
            {
                // Wait for the user input to complete, or timeout if the timer expires
                int userAnswer = userInputTask.get(timePerQuestion, TimeUnit.SECONDS);
                timerTask.cancel(true); // Cancel the timer if the user answered in time
                checkAnswer(userAnswer, question.correctAnswerIndex());
            }
            catch (TimeoutException e)
            {
                System.out.println("You did not answer in time.");
            }
            catch (InterruptedException | ExecutionException e) {
                System.out.println("An error occurred while getting input.");
            }
            finally
            {
                inputExecutor.shutdownNow();
                executorService.shutdownNow();
            }
        }
    }

    /**
     * <p>Verify if the player provides the correct answer following
     * the answer index in the answer list and the correct answer index.</p>
     *
     * @param userAnswer the user answer index to verify
     * @param correctAnswer the correct answer index
     */
    private void checkAnswer(int userAnswer, int correctAnswer) {
        if (userAnswer == correctAnswer + 1) { // +1 because the index is 0-based
            System.out.println("Correct answer!");
            score++;
        }
        else {
            System.out.println("Wrong answer.");
        }
        System.out.println("------------------------------------------------------------");
    }

    /**
     * <p>Display the player result base on how many correct answer he founds.</p>
     */
    private void displayResults()
    {
        System.out.println("Quiz finished!");
        System.out.println("Your final score is: " + score + "/" + questions.size());
    }

}

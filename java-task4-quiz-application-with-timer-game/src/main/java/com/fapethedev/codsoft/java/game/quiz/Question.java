package com.fapethedev.codsoft.java.game.quiz;

import java.util.List;

/**
 * <p>Record class for a question
 * as question itself shouldn't change when by displayed.</p>
 *
 * @param text the question title.
 * @param options the possible answer for the question.
 * @param correctAnswerIndex the index of the correct answer among the options.
 *
 * @author <a href="https://github.com">Fapethedev</a>
 */
public record Question(String text, List<String> options, int correctAnswerIndex) {
}

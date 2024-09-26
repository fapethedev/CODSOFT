package com.fapethedev.codsoft.java.game.quiz;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Component
public class QuestionProvider
{
    private final List<Question> questions = new ArrayList<>();

    public QuestionProvider() {
        questions.add(new Question("What is the primary goal of Data Science?", List.of("Data visualization", "Predictive modeling", "Data storage", "Data retrieval"), 1));
        questions.add(new Question("Which algorithm is commonly used for supervised learning in AI?", List.of("Decision Trees", "K-means", "PCA", "DBSCAN"), 0));
        questions.add(new Question("What is a relationship in Neo4j?", List.of("A node", "A directed connection between nodes", "A database query", "A data retrieval operation"), 1));
        questions.add(new Question("What is the key role of Quality Assurance (QA) in software development?", List.of("Ensuring code is bug-free", "Maximizing code efficiency", "Maintaining test coverage", "Verifying software functionality"), 3));
        questions.add(new Question("Which of the following is a UX principle?", List.of("Consistency", "Modularity", "Abstraction", "State management"), 0));
        questions.add(new Question("What is the primary goal of Data Science?", List.of("Data visualization", "Predictive modeling", "Data storage", "Data retrieval"), 1));
        questions.add(new Question("Which algorithm is commonly used for supervised learning in AI?", List.of("Decision Trees", "K-means", "PCA", "DBSCAN"), 0));
        questions.add(new Question("What is a relationship in Neo4j?", List.of("A node", "A directed connection between nodes", "A database query", "A data retrieval operation"), 1));
        questions.add(new Question("What is the key role of Quality Assurance (QA) in software development?", List.of("Ensuring code is bug-free", "Maximizing code efficiency", "Maintaining test coverage", "Verifying software functionality"), 3));
        questions.add(new Question("Which of the following is a UX principle?", List.of("Consistency", "Modularity", "Abstraction", "State management"), 0));
        questions.add(new Question("Which programming language is commonly used in Data Science?", List.of("Python", "C++", "Ruby", "Java"), 0));
        questions.add(new Question("Which of the following is a NoSQL database?", List.of("Neo4j", "MySQL", "PostgreSQL", "OracleDB"), 0));
        questions.add(new Question("In AI, what does 'NLP' stand for?", List.of("Natural Link Processing", "Natural Language Processing", "Neural Language Programming", "Non-linear Programming"), 1));
        questions.add(new Question("In UX design, what is a persona?", List.of("A tool for user interface design", "A representation of a user group", "A wireframe model", "A navigation guide"), 1));
        questions.add(new Question("In QA, what is regression testing?", List.of("Testing only new features", "Testing previously working functionality after changes", "A performance test", "Testing UI elements"), 1));
        questions.add(new Question("What is the primary goal of Data Science?", List.of("Data visualization", "Predictive modeling", "Data storage", "Data retrieval"), 1));
        questions.add(new Question("Which algorithm is used for classification problems in AI?", List.of("K-means clustering", "Decision Trees", "Linear regression", "Random forest"), 1));
        questions.add(new Question("In Neo4j, what is a node?", List.of("A connection between two relationships", "A label for a data type", "A data point representing an entity", "A query language"), 2));
        questions.add(new Question("What does QA in software development stand for?", List.of("Quality Assurance", "Query Analysis", "Queue Algorithm", "Question Answering"), 0));
        questions.add(new Question("What is the primary focus of UX design?", List.of("Aesthetics", "User satisfaction", "Color schemes", "Font selection"), 1));
        questions.add(new Question("What is the primary goal of Data Science?", List.of("Data visualization", "Predictive modeling", "Data storage", "Data retrieval"), 1));
        questions.add(new Question("Which algorithm is commonly used for supervised learning in AI?", List.of("Decision Trees", "K-means", "PCA", "DBSCAN"), 0));
        questions.add(new Question("What is a relationship in Neo4j?", List.of("A node", "A directed connection between nodes", "A database query", "A data retrieval operation"), 1));
        questions.add(new Question("What is the key role of Quality Assurance (QA) in software development?", List.of("Ensuring code is bug-free", "Maximizing code efficiency", "Maintaining test coverage", "Verifying software functionality"), 3));
        questions.add(new Question("Which of the following is a UX principle?", List.of("Consistency", "Modularity", "Abstraction", "State management"), 0));
        questions.add(new Question("Which programming language is commonly used in Data Science?", List.of("Python", "C++", "Ruby", "Java"), 0));
        questions.add(new Question("Which of the following is a NoSQL database?", List.of("Neo4j", "MySQL", "PostgreSQL", "OracleDB"), 0));
        questions.add(new Question("In AI, what does 'NLP' stand for?", List.of("Natural Link Processing", "Natural Language Processing", "Neural Language Programming", "Non-linear Programming"), 1));
        questions.add(new Question("In UX design, what is a persona?", List.of("A tool for user interface design", "A representation of a user group", "A wireframe model", "A navigation guide"), 1));
        questions.add(new Question("In QA, what is regression testing?", List.of("Testing only new features", "Testing previously working functionality after changes", "A performance test", "Testing UI elements"), 1));
    }

    /**
     * <p>Return the array of question with
     * a different order each time.</p>
     *
     * @return a unpredicted list of all questions.
     */
    public List<Question> loadQuestions() {
        Collections.shuffle(questions);
        return questions;
    }
}

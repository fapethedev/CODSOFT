# Java Task 4 QUIZ APPLICATION WITH TIMER

## Features

1. Quiz Questions and Options: Store quiz questions along with multiple-choice options and correct
answers.
2. Timer: Implement a timer for each question to limit the time to answer.
3. Question Display: Present one question at a time with multiple-choice options.
4. Answer Submission: Allow users to select an option and submit their answer within the given
time.
5. Score Calculation: Keep track of the user's score based on correct answers.

Result Screen: Display the final score and a summary of correct/incorrect answers.

## Technical Details

1. Java 21 or more
2. SpringBoot 3.3.x
3. Maven 3.9.x

## How to Run this game
Before running this project make sur that you have java
installed on your system. Don't worry about installing 
maven there is a maven wrapper inside the working directory. 

If you have already installed maven use mvn instead of mvnw

### To resolve dependencies
```shell
mvnw verify
```

If you installed maven before
```shell
mvn verify
```

### To purge the generated file and compile the project
```shell
mvnw clean compile install
```
If you installed maven before
```shell
mvn clean compile install
```

###  To run the application
```shell
java -jar quiz.jar
```
or
```shell
mvnw spring-boot:run
```
or
```shell
mvn spring-boot:run
```
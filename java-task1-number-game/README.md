# Java Task 1 Number Game

## Features

1. Generate a random number within a specified range, such as 1 to 100.
2. Prompt the user to enter their guess for the generated number.
3. Compare the user's guess with the generated number and provide feedback on whether the guess
is correct, too high, or too low.
4. Repeat steps 2 and 3 until the user guesses the correct number.

You can incorporate additional details as follows:

5. Limit the number of attempts the user has to guess the number.
6. Add the option for multiple rounds, allowing the user to play again.
7. Display the user's score, which can be based on the number of attempts taken or rounds won.

## Technical Details

1. Java 21 or more
2. SpringBoot 3.3.x
3. Maven 3.9.x

## How to Run this game
Before running this project make sur that you have java
installed on your system. Don't worry about installing 
maven there is a maven wrapper inside the working directory. 

If you have already installed maven use mvn instead of mvnw

To resolve dependencies
```shell
mvnw verify
```

If you installed maven before
```shell
mvn verify
```

To purge the generated file and compile the project
```shell
mvnw clean compile install
```
If you installed maven before
```shell
mvn clean compile install
```

To run the application
```shell
java -jar number-game.jar
```
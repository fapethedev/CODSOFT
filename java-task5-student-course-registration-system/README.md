# Java Task 5 STUDENT COURSE REGISTRATION SYSTEM

## Features

1. Course Database: Store course information, including course code, title,
description, capacity, and schedule.
2. Student Database: Store student information, including student ID, name, and
registered courses.
3. Course Listing: Display available courses with details and available slots.
4. Student Registration: Allow students to register for courses from the available
options.
5. Course Removal: Enable students to drop courses they have registered for.

## Technical Details

1. Java 21 or more
2. SpringBoot 3.3.x
3. Maven 3.9.x

## How to Run this application
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
java -jar course-system.jar
```
or
```shell
mvnw spring-boot:run
```
or
```shell
mvn spring-boot:run
```
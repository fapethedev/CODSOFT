CREATE TABLE courses(
    id LONG PRIMARY KEY AUTO_INCREMENT,
    course_code VARCHAR(255) NOT NULL UNIQUE,
    title VARCHAR(255),
    description VARCHAR(255),
    capacity INT,
    schedule VARCHAR(255)
);

CREATE TABLE students(
    id LONG PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE student_course(
    student_id LONG NOT NULL,
    course_id LONG NOT NULL,
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES students (id),
    FOREIGN KEY (course_id) REFERENCES courses (id)
);

INSERT INTO courses (course_code, title, description, capacity, schedule) VALUES
('CS101', 'Introduction to Process Management', 'Learn the basics of process management, including process scheduling, resource allocation, and deadlock prevention.', 30, 'Mon-Wed 10:00-11:30 AM'),
('CS102', 'Advanced Process Management Techniques', 'A deeper dive into multi-threading, process synchronization, and inter-process communication techniques.', 25, 'Tue-Thu 1:00-2:30 PM'),
('CS103', 'Process Monitoring and Debugging', 'Techniques for monitoring and debugging processes on Linux and Windows operating systems.', 20, 'Mon-Fri 9:00-10:30 AM'),
('OS201', 'Open Source Software Licensing', 'Introduction to different open-source licenses like GPL, MIT, Apache, and their legal implications.', 40, 'Wed 3:00-5:00 PM'),
('OS202', 'Open Source Software Governance', 'Understand the principles of open-source software governance and best practices in contributing to OSS projects.', 35, 'Thu 10:00 AM-12:00 PM'),
('OS203', 'Building and Managing Open Source Projects', 'Learn how to start, manage, and build successful open-source projects with GitHub and GitLab.', 30, 'Tue 2:00-4:00 PM'),
('JV301', 'Advanced Java Programming', 'Explore advanced Java programming concepts such as streams, concurrency, and reactive programming.', 25, 'Mon-Wed 11:00 AM-12:30 PM'),
('JV302', 'Java Performance Tuning', 'Techniques for optimizing Java applications, including garbage collection tuning and JVM performance monitoring.', 20, 'Fri 10:00 AM-12:00 PM'),
('JV303', 'Java Memory Management', 'Understand the Java memory model, heap management, and tools for debugging memory issues.', 30, 'Tue-Thu 1:00-2:30 PM'),
('JV304', 'Java Design Patterns', 'Learn how to apply Gang of Four design patterns using Java and best practices in software architecture.', 25, 'Mon-Wed 3:00-4:30 PM'),
('JV305', 'Building Microservices with Java', 'Learn how to design, build, and deploy microservices using Spring Boot and Docker.', 40, 'Thu 9:00-11:00 AM'),
('AR401', 'Introduction to ArangoDB', 'A comprehensive introduction to ArangoDB, a multi-model database for document, graph, and key/value storage.', 30, 'Mon-Wed 2:00-3:30 PM'),
('AR402', 'Advanced ArangoDB Querying', 'Deep dive into ArangoDB querying with AQL (ArangoDB Query Language), indexing, and performance optimization.', 25, 'Tue-Thu 10:00-11:30 AM'),
('AR403', 'Data Modeling with ArangoDB', 'Learn data modeling techniques in ArangoDB, including schema design for document and graph databases.', 20, 'Wed 3:00-5:00 PM'),
('AR404', 'ArangoDB in Production', 'Best practices for deploying, scaling, and monitoring ArangoDB clusters in production environments.', 35, 'Fri 1:00-3:00 PM');

INSERT INTO students (name) VALUES
('Juan Carlos'),
('Mei Ling'),
('Olaf Svensson'),
('Aarav Patel'),
('Fatima Zahra'),
('Yuki Tanaka'),
('Sara Müller'),
('Isabella Rossi'),
('Ahmed Al-Farsi'),
('Anna Ivanova'),
('Kofi Mensah'),
('Emily Nguyen'),
('Pedro Gomez'),
('Musa Abubakar');

package com.fapethedev.codsoft.java.scrs.student;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface StudentRepository extends JpaRepository<Student, Long> {
    Optional<Student> findByName(String name);

    List<Student> findByCoursesId(Long courseId);
}

package com.fapethedev.codsoft.java.scrs.course;

import com.fapethedev.codsoft.java.scrs.student.Student;
import jakarta.persistence.*;
import lombok.Getter;

import java.util.HashSet;
import java.util.Set;

/**
 * <p>Course entity object.</p>
 *
 * @author <a href="http://github.com/fapethedev">Fapethedev</a>
 */
@Entity
@Table(name = "courses")
@Getter
public class Course
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String courseCode;
    private String title;
    private String description;
    private int capacity;
    private String schedule;

    @ManyToMany(mappedBy = "courses", fetch = FetchType.LAZY)
    private Set<Student> students = new HashSet<>();
}

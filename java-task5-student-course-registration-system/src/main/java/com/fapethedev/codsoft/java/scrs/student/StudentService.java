package com.fapethedev.codsoft.java.scrs.student;

import com.fapethedev.codsoft.java.scrs.course.Course;
import com.fapethedev.codsoft.java.scrs.course.CourseService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class StudentService {

    private final StudentRepository studentRepository;
    private final CourseService courseService;

    public Student findByName(String name)
    {
        return studentRepository.findByName(name).orElseThrow();
    }

    public void registerForCourse(Long studentId, String courseCode) {
        studentRepository.findById(studentId).ifPresentOrElse(student -> {
            Course course = courseService.getCourseByCode(courseCode);

            if (!courseService.isCourseFull(course)) {
                student.getCourses().add(course);
                course.getStudents().add(student);
                studentRepository.save(student);
                courseService.saveCourse(course);
            } else {
                System.out.println("The course is full !");;
            }
        }, () -> System.out.println("No students have been registered with this id"));
    }

    public void dropCourse(Long studentId, String courseCode) {
        studentRepository.findById(studentId).ifPresentOrElse(student -> {
            Course course = courseService.getCourseByCode(courseCode);

            if (student.getCourses().contains(course)) {
                student.getCourses().remove(course);
                course.getStudents().remove(student);
                studentRepository.save(student);
                courseService.saveCourse(course);
            } else {
                System.out.printf("The student %s has not registered for the course %s", student.getName(), courseCode);
            }
        }, () -> System.out.println("No students have been registered with this id"));
    }
}

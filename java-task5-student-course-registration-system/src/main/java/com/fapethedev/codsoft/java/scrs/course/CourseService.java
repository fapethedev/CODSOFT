package com.fapethedev.codsoft.java.scrs.course;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CourseService {

    private final CourseRepository courseRepository;

    public List<Course> listAllCourses() {
        return courseRepository.findAll();
    }

    public Course getCourseByCode(String courseCode) {
        return courseRepository.findByCourseCode(courseCode);
    }

    public Course saveCourse(Course course) {
        return courseRepository.save(course);
    }

    public void deleteCourse(Long id) {
        courseRepository.deleteById(id);
    }

    public boolean isCourseFull(Course course) {
        return course.getStudents().size() >= course.getCapacity();
    }
}

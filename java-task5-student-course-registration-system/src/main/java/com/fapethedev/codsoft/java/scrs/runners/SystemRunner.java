package com.fapethedev.codsoft.java.scrs.runners;

import com.fapethedev.codsoft.java.scrs.course.CourseService;
import com.fapethedev.codsoft.java.scrs.student.StudentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Scanner;

@Component
@RequiredArgsConstructor
@Slf4j
public class SystemRunner implements CommandLineRunner
{
    private final Scanner input = new Scanner(System.in);
    private final StudentService studentService;
    private final CourseService courseService;

    @Override
    public void run(String... args) throws Exception {
        System.out.println("\nStudent Course Registration System\n".toUpperCase());
        boolean working = true;
        while (working)
        {
            System.out.println("Menu\n".toUpperCase());

            System.out.println("1.All Courses\n");
            System.out.println("2.My Courses\n");
            System.out.println("3.Exit\n");

            if (input.hasNextInt()) {
                int option = input.nextInt();

                switch (option) {
                    case 1:
                        courseCatalog();
                        break;
                    case 2:
                        myCourseOption();
                        break;
                    case 3:
                        working = false;
                        break;
                    default:
                        System.err.println("Invalid input");
                        break;
                }
            } else {
                System.out.println("Invalid input");
            }
        }

        System.out.println("Thanks for testing");
    }

    private void courseCatalog() {
        courseService.listAllCourses().forEach(System.out::println);

        System.out.println("\n1.Register for this course");
        System.out.println("\n0.Back");

        if (input.hasNextInt() && input.nextInt() == 1) {
            input.nextLine();

            System.out.println("Enter your name: ");
            var name = input.nextLine();
            var student = studentService.findByName(name);

            System.out.println("Enter the course code: ");
            studentService.registerForCourse(student.getId(), input.next());

            System.out.println("You successfully register for this course !");
        }
    }

    private void myCourseOption() {
        input.nextLine();

        System.out.println("Enter your name: ");
        var name = input.nextLine();
        var student = studentService.findByName(name);

        if (student.getCourses().isEmpty()) {
            System.out.println("You are not registered for any course");

            System.out.println("\n1.Do you want to register for a course ?");
            System.out.println("\n0.Back");

            if (input.hasNextInt() && input.nextInt() == 1) {
                courseCatalog();
            }

        } else {
            student.getCourses().forEach(System.out::println);

            System.out.println("\n1.Drop a course");
            System.out.println("\n0.Back");

            if (input.hasNextInt() && input.nextInt() == 1) {
                input.nextLine();

                System.out.println("Enter the course code: ");
                studentService.dropCourse(student.getId(), input.nextLine());

                System.out.println("You successfully drop this course !");
            }
        }
    }
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCard } from './features/courses/course-card/course-card/course-card';
import { Course } from './core/models/course.model';
import { CourseManagementComponent } from './features/admin/courses/course-management/course-management';
import { LessonManagementComponent } from './features/admin/lessons/lesson-management/lesson-management';
import { StudentDirectoryComponent } from './features/admin/students/student-directory/student-directory';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CourseCard,
    CourseManagementComponent,
    LessonManagementComponent,
    StudentDirectoryComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lms_angular');

  courses : Course[] =[{
      "id": 1,
      "title": "Modern Angular: The Complete Guide",
      "description": "Master Angular from scratch with Standalone Components, Modern Control Flow (@if, @for), Signals, and Reactive Forms.",
      "instructor": "Maximilian Schwarz",
      "category": "Angular",
      "price": 500,
      "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80",
      "level": "Beginner",
      "duration": 24,
      "studentsCount": 1241,
      "rating": 4.9
    },
    {
      "id": 2,
      "title": "Advanced Angular Architecture & Signals",
      "description": "Deep dive into production-grade enterprise architecture, reactive state with Signals, and performance optimization.",
      "instructor": "John Papa",
      "category": "Angular",
      "price": 750,
      "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
      "level": "Advanced",
      "duration": 18,
      "studentsCount": 820,
      "rating": 4.8
    },
    {
      "id": 3,
      "title": "TypeScript from Zero to Hero",
      "description": "Learn strong typing, interfaces, generics, decorators, and modern TypeScript toolchains for clean scalable code.",
      "instructor": "Deborah Kurata",
      "category": "TypeScript",
      "price": 350,
      "image": "https://images.unsplash.com/photo-1516116211227-bbc13c32ffc5?w=800&auto=format&fit=crop&q=80",
      "level": "Beginner",
      "duration": 12,
      "studentsCount": 950,
      "rating": 4.7
    },
    {
      "id": 4,
      "title": "Modern JavaScript Mastery & ESNext",
      "description": "Become proficient in modern JavaScript, closures, asynchronous programming, modules, and modern web APIs.",
      "instructor": "Brad Traversy",
      "category": "JavaScript",
      "price": 200,
      "image": "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&auto=format&fit=crop&q=80",
      "level": "Intermediate",
      "duration": 16,
      "studentsCount": 1500,
      "rating": 4.5
    },
    {
      "id": 5,
      "title": "JavaScript Fundamentals for Beginners",
      "description": "Start your coding journey with core programming foundations, variables, functions, DOM manipulation, and problem-solving.",
      "instructor": "Brad Traversy",
      "category": "JavaScript",
      "price": 0,
      "image": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80",
      "level": "Beginner",
      "duration": 8,
      "studentsCount": 3200,
      "rating": 4.2
    },
    {
      "id": 6,
      "title": "Responsive Web Design with HTML5 & Tailwind CSS",
      "description": "Build high-converting, mobile-friendly web pages with semantic HTML5 and utility-first Tailwind CSS design principles.",
      "instructor": "Kevin Powell",
      "category": "HTML & CSS",
      "price": 0,
      "image": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80",
      "level": "Beginner",
      "duration": 10,
      "studentsCount": 2100,
      "rating": 4
    },
    {
      "id": 7,
      "title": "Java Programming Masterclass",
      "description": "Comprehensive guide to Java 21, object-oriented programming, Collections framework, Lambdas, Streams, and Multithreading.",
      "instructor": "Tim Buchalka",
      "category": "Java",
      "price": 1000,
      "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80",
      "level": "Intermediate",
      "duration": 32,
      "studentsCount": 1800,
      "rating": 4.7
    },
    {
      "id": 8,
      "title": "Full-Stack Enterprise Apps with Spring Boot & Angular",
      "description": "Build real-world full-stack systems with Spring Boot REST microservices, JPA/Hibernate, and an Angular client frontend.",
      "instructor": "Chad Darby",
      "category": "Spring Boot",
      "price": 1500,
      "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80",
      "level": "Advanced",
      "duration": 28,
      "studentsCount": 640,
      "rating": 5
    },
    {
      "title": "Angular Deep Dive - Beginner to Advanced (Angular 22)",
      "description": "Angular Deep Dive - Beginner to Advanced (Angular 22) Angular Deep Dive - Beginner to Advanced (Angular 22)",
      "instructor": "Angular University",
      "category": "Angular",
      "price": 500,
      "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80",
      "level": "Beginner",
      "duration": 12,
      "studentsCount": 1,
      "rating": 5,
      "id": 9
    }]

  testCourse: Course = {
    "id": 1,
    "title": "Modern Angular: The Complete Guide",
    "description": "Master Angular from scratch with Standalone Components, Modern Control Flow (@if, @for), Signals, and Reactive Forms.",
    "instructor": "Maximilian Schwarz",
    "category": "Angular",
    "price": 500,
    "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80",
    "level": "Beginner",
    "duration": 24,
    "studentsCount": 1241,
    "rating": 4.9
  }

  onViewCourseDetails(course: Course) {
    console.log(course);
  }
}

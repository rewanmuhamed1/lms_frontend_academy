import { Component, signal } from '@angular/core';
import { CourseCard } from './features/courses/course-card/course-card/course-card';
import { Course } from './core/models/course.model';
import { CourseManagementComponent } from './features/admin/courses/course-management/course-management';
import { LessonManagementComponent } from './features/admin/lessons/lesson-management/lesson-management';
import { StudentDirectoryComponent } from './features/admin/students/student-directory/student-directory';
import { CoursesService } from './core/services/courses';
import { Router, RouterOutlet } from '@angular/router';

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
export class App 
{
  protected readonly title = signal('lms_angular');

  

}

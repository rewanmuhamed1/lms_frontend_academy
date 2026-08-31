import { Component, signal } from '@angular/core';
import { Course } from '../../core/models/course.model';
import { CoursesService } from '../../core/services/courses';
import { Router, RouterOutlet } from '@angular/router';
import { CourseCard } from "../courses/course-card/course-card/course-card";
import { CourseManagementComponent } from "../admin/courses/course-management/course-management";
import { LessonManagementComponent } from "../admin/lessons/lesson-management/lesson-management";
import { StudentDirectoryComponent } from "../admin/students/student-directory/student-directory";


@Component({
  imports: [CourseCard, CourseManagementComponent, LessonManagementComponent, StudentDirectoryComponent],
  selector: 'app-course-list',
  styleUrl: './course-list.css',
  templateUrl: './course-list.html',
})
export class CourseList 
{
  constructor(private coursesService: CoursesService, private router: Router) {}
    get courses(): Course[] 
  {
    return this.coursesService.courses;
  }

  onViewCourseDetails(course: Course) {
    this.router.navigate(['/courses', course.id]);
  }
}

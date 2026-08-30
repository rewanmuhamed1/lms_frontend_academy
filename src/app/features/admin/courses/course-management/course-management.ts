import { Component } from '@angular/core';

export interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  category: string;
  price: number;
  level: string;
  duration: number;
  studentsCount: number;
  rating: number;
}

@Component({
  selector: 'app-course-management',
  standalone: true,
  templateUrl: './course-management.html',
  styleUrls: ['./course-management.css']
})
export class CourseManagementComponent {
  courses: Course[] = [
    {
      id: 1,
      title: 'Modern Angular: The Complete Guide',
      description: 'Master Angular from scratch with Standalone Components, Signals, and Reactive Forms.',
      instructor: 'Maximilian Schwarz',
      category: 'Angular',
      price: 500,
      level: 'Beginner',
      duration: 24,
      studentsCount: 1241,
      rating: 4.9
    },
    {
      id: 2,
      title: 'Advanced Angular Architecture & Signals',
      description: 'Deep dive into enterprise architecture and performance optimization.',
      instructor: 'John Papa',
      category: 'Angular',
      price: 750,
      level: 'Advanced',
      duration: 18,
      studentsCount: 820,
      rating: 4.8
    }
  ];

  onView(course: Course) { console.log('View course:', course); }
  onEdit(course: Course) { console.log('Edit course:', course); }
  onDelete(course: Course) { console.log('Delete course:', course); }
}

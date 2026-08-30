import { Component } from '@angular/core';

export interface Lesson {
  id: number;
  order: number;
  title: string;
  course: string;
  duration: string;
}

@Component({
  selector: 'app-lesson-management',
  standalone: true,
  templateUrl: './lesson-management.html',
  styleUrls: ['./lesson-management.css']
})
export class LessonManagementComponent {
  lessons: Lesson[] = [
    { id: 1, order: 1, title: 'Introduction to Angular & Project Architecture', course: 'Modern Angular: The Complete Guide', duration: '20 mins' },
    { id: 2, order: 2, title: 'Standalone Components, Inputs & Outputs', course: 'Modern Angular: The Complete Guide', duration: '35 mins' },
    { id: 3, order: 3, title: 'Signals Fundamentals & Reactive Primitives', course: 'Advanced Angular Architecture & Signals', duration: '30 mins' }
  ];

  onEdit(lesson: Lesson) { console.log('Edit lesson:', lesson); }
  onDelete(lesson: Lesson) { console.log('Delete lesson:', lesson); }
}

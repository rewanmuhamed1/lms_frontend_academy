import { Component } from '@angular/core';

export interface Student {
  id: number;
  name: string;
  email: string;
  enrolledCourses: number;
  role: string;
}

@Component({
  selector: 'app-student-directory',
  standalone: true,
  templateUrl: './student-directory.html',
  styleUrls: ['./student-directory.css']
})
export class StudentDirectoryComponent {
  students: Student[] = [
    { id: 2, name: 'Alex Johnson', email: 'student@edulms.com', enrolledCourses: 3, role: 'STUDENT' },
    { id: 3, name: 'Sarah Miller', email: 'sarah@edulms.com', enrolledCourses: 2, role: 'STUDENT' },
    { id: 4, name: 'Omar Hassan', email: 'omar@edulms.com', enrolledCourses: 2, role: 'STUDENT' }
  ];
}

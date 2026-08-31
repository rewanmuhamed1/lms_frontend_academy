import { Routes } from '@angular/router';
import { CourseList } from './features/courses/course-list/course-list';
import { Login } from './features/auth/login/login';
import { AddCourse } from './features/admin/courses/add-course/add-course';

export const routes: Routes = [
  {
    path: '',
    component: CourseList
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'add-course',
    component: AddCourse
  },
  {
    path: '**',
    redirectTo: ''
  }
];
import { Routes } from '@angular/router';
import { CourseDetails } from './features/course-details/course-details';
import { CourseList } from './features/course-list/course-list';

export const routes: Routes = [       // or whatever you name the home/listing view
  { path: '', component: CourseList },
  { path: 'courses/:id', component: CourseDetails },
  
];

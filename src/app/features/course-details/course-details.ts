import { Component } from '@angular/core';
import { Course } from '../../core/models/course.model';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CoursesService } from '../../core/services/courses';

interface Lesson {
  order: number;
  title: string;
  description: string;
  duration: string;
}


@Component({
  selector: 'app-course-details',
  imports: [CommonModule],
  templateUrl: './course-details.html',
  styleUrl: './course-details.css',
})
export class CourseDetails 
{

  course?: Course;
  constructor(private route: ActivatedRoute, private coursesService: CoursesService) {}

  masteryPoints = [
  'Master modern standalone component paradigms and modern syntax',
  'Integrate backend REST endpoints and handle error boundaries',
  'Write reactive forms with custom validators and route guards',
  'Build production-ready, accessible, and responsive user interfaces',
];

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.course = this.coursesService.getById(id);
  }

  get discountPercent(): number {
    if (!this.course) return 0;
    const original = Math.round(this.course.price * 1.33);
    return Math.round(100 - (this.course.price / original) * 100);
  }

  lessons: Lesson[] = [
    {
      order: 1,
      title: 'Spring Boot Project Setup & REST Controllers',
      description: 'Spring Initializr, @RestController, @GetMapping, and request mapping.',
      duration: '35 min',
    },
    {
      order: 2,
      title: 'Spring Data JPA, Entities & PostgreSQL / H2',
      description: 'Creating entities, Spring Data repositories, query methods, and database migrations.',
      duration: '42 min',
    },
    {
      order: 3,
      title: 'Integrating Angular Frontend with Spring Boot APIs',
      description: 'CORS configuration, HttpClient integration, error handling, and end-to-end testing.',
      duration: '50 min',
    },
  ];

  price = 1500;
  originalPrice = 3000;
  discountLabel = '50% off';
  currency = 'EGP';

  perks = [
    'Full lifetime access to all lessons',
    'Interactive progress tracker',
    'Self-paced video modules',
    'Verified Certificate of Completion',
  ];
}

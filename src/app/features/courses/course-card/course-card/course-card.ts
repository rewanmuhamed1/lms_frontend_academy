import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../../../core/models/course.model';
import { CourseLevel } from '../../../../core/enums/course_level';

@Component({
  selector: 'app-course-card',
  imports: [],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard {
@Input({required : true}) course !: Course
@Output() viewDetails = new EventEmitter<Course>()


get originalPrice(): number {
   if (!this.course.price) return 0;
    return Math.round(this.course.price * 1.33);
}


get levelBadgeClass():string {
  switch(this.course.level.toLowerCase()){
    case CourseLevel.BEGINNER:
        return 'bg-emerald-500/90 text-white backdrop-blur-md';
      case CourseLevel.INTERMEDIATE:
        return 'bg-amber-500/90 text-white backdrop-blur-md';
      case CourseLevel.ADVANCED:
        return 'bg-purple-600/90 text-white backdrop-blur-md';
      default:
        return 'bg-slate-700/90 text-white backdrop-blur-md';
  }
}

onCardClick(){
this.viewDetails.emit(this.course)
}
}

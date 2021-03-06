import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  allCourses=[];
  availableCourses=[];
  myCourses=[];

  constructor() { }

  ngOnInit(): void {
    this.allCourses = [
      new Course("Intro to Underwater Coding", "LC105", ["Mon", "Wed"], "2:00 PM", "3:30 PM", 3),
      new Course("Philosophy & Star Trek", "LC140", ["Tue", "Thu"], "9:00 AM", "10:30 AM", 3),
      new Course("Googling Like a Boss", "LC115", ["Tue", "Thu"], "11:00 AM", "12:00 PM", 2),
      new Course("Narcissism & Stack Overflow: A Case Study", "LC411", ["Mon", "Wed"], "2:30 PM", "4:00 PM", 3),
      new Course("Coding Logic with Spock", "LC240", ["Tue", "Thu"], "8:30 AM", "10:00 AM", 3),
      new Course("Irregular Expressions", "LC317", ["Tue", "Thu"], "2:00 PM", "3:30 PM", 3),
      new Course("Demystifying Asynchronicity", "LC230", ["Wed", "Fri"], "2:00 PM", "3:00 PM", 2),
      new Course("Intro to Horse Massage", "LC450", ["Thurs"], "11:00 AM", "1:00 PM", 5),
      new Course("Advanced Nail Polish Techniques", "LC389", ["Mon", "Tues", "Wed"], "4:00 PM", "5:30 PM", 2),
      new Course("Technology for Seniors", "LC100", ["Sat"], "7:00 AM", "8:30 AM", 2),

      this.availableCourses=this.allCourses.slice(0)
];

  }

}

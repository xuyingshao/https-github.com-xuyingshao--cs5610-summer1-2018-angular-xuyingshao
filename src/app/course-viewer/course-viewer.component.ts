import {Component, OnInit} from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../models/course.model.client';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {

  constructor(private courseService: CourseServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.loadCourse(params['courseId']));
  }

  course: Course = new Course();

  loadCourse(courseId) {
    this.courseService.findCourseById(courseId)
      .then(course => this.course = course);
  }

  ngOnInit() {
  }
}

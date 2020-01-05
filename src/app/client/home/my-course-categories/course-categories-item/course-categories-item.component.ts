import { Component, OnInit, Input } from '@angular/core';
import { ICourse } from 'src/app/models/course';

@Component({
  selector: 'app-course-categories-item',
  templateUrl: './course-categories-item.component.html',
  styleUrls: ['./course-categories-item.component.scss']
})
export class CourseCategoriesItemComponent implements OnInit {
  @Input() course: ICourse;
  constructor() { }

  ngOnInit() {
  }

}

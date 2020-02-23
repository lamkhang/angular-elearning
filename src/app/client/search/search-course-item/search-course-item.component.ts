import { Component, OnInit, Input } from '@angular/core';
import { ICourse } from 'src/app/models/course';

@Component({
  selector: 'app-search-course-item',
  templateUrl: './search-course-item.component.html',
  styleUrls: ['./search-course-item.component.scss']
})
export class SearchCourseItemComponent implements OnInit {
  @Input() course: ICourse;
  constructor() { }

  ngOnInit() {
  }

}

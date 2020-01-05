import { Component, OnInit, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { ICourse } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-my-student-item',
  templateUrl: './my-student-item.component.html',
  styleUrls: ['./my-student-item.component.scss']
})
export class MyStudentItemComponent implements OnInit {
  @Input() course: ICourse;
  tooltipster: {course: ICourse, offsetX: number, disableAddCourseToShoppingCard:boolean};
  @Output() tooltipsterEmitter = new EventEmitter()
  constructor(private elRef:ElementRef, private _courseService: CourseService) { }

  ngOnInit() {
    this._courseService.courseArrInShoppingCardEmitter.subscribe( (courseList:ICourse[]) => {
      const index = courseList.findIndex(item => item.maKhoaHoc === this.course.maKhoaHoc);
      const disableAddCourseToShoppingCard =  (index!==-1) ? true : false;
      this.tooltipster = { ...this.tooltipster, disableAddCourseToShoppingCard }
    }, (err) => {console.log(err)})
  }
  mouseEnter():void{
    let course = {...this.course};
    this.tooltipster = { ...this.tooltipster, course, offsetX: this.elRef.nativeElement.getBoundingClientRect().left };
    this.tooltipsterEmitter.emit(this.tooltipster);
  }
}

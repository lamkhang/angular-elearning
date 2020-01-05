import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { ICourse } from 'src/app/models/course';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private _courseService: CourseService, private _activedRoute: ActivatedRoute) { }
  courseDetail: ICourse;
  disableAddCourseToShoppingCard: boolean = false;
  ngOnInit() {
    this._activedRoute.params.subscribe( (params) => {
      this._courseService.courseDetailEmitter.subscribe( (courseDetail: ICourse) => {
        this.courseDetail = courseDetail
      }, (err) => {console.log(err)} )
      this._courseService.getCourseDetail(params.id);
    } )
    this._courseService.courseArrInShoppingCardEmitter.subscribe( (courseList) => {
      const index = courseList.findIndex(item => item.maKhoaHoc === this.courseDetail.maKhoaHoc);
      this.disableAddCourseToShoppingCard = (index!==-1) ? true : false;
    }, (err) => {console.log(err)})

  }
  handleAddCourseToShoppingCard(courseDetail: ICourse): void{
    this._courseService.addCourseToShoppingCard(courseDetail);

  }

}

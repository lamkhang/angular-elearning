import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { ICourse } from 'src/app/models/course';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-my-student',
  templateUrl: './my-student.component.html',
  styleUrls: ['./my-student.component.scss']
})
export class MyStudentComponent implements OnInit {
  courseList: ICourse[] = [];
  tooltipsterCourse: {course: ICourse, offsetX: number, disableAddCourseToShoppingCard:boolean};
  isShowTooltipsterCourse="";
  positionTooltipster:string = "";
  isPointerEnterTooltipster:boolean = false;
  constructor(private _courseService: CourseService) { }

  ngOnInit() {
    this._courseService.courseArrEmitter.subscribe( (courseList: ICourse[]) => {
      this.courseList = [...courseList];
    }, (err) => {console.log(err)} )
    this._courseService.getCourseArr();
  }

  handleIsShowTooltipster(tooltipster: {course: ICourse, offsetX: number, disableAddCourseToShoppingCard:boolean}):void{
    if(!this.isPointerEnterTooltipster){
      if(tooltipster.offsetX===0){
        this.isShowTooltipsterCourse = "";
      }else if(tooltipster.offsetX < 200){
        this.isShowTooltipsterCourse = "left";
        this.tooltipsterCourse = { ...tooltipster };
        this.positionTooltipster = "20%";
      }
      else if(tooltipster.offsetX < 400){
        this.isShowTooltipsterCourse = "left";
        this.tooltipsterCourse = { ...tooltipster };
        this.positionTooltipster = "40%";
      }
      else if(tooltipster.offsetX < 600){
        this.isShowTooltipsterCourse = "left";
        this.tooltipsterCourse = { ...tooltipster };
        this.positionTooltipster = "60%";
      }
      else if(tooltipster.offsetX < 800){
        this.isShowTooltipsterCourse = "right";
        this.tooltipsterCourse = { ...tooltipster };
        this.positionTooltipster = "30%";
      }
      else{
        this.isShowTooltipsterCourse = "right";
        this.tooltipsterCourse = { ...tooltipster };
        this.positionTooltipster = "50%";
      }
    }
  }
  mouseEnterTooltipster():void{
    this.isPointerEnterTooltipster = true;
  }
  mouseLeaveTooltipster():void{
    this.isPointerEnterTooltipster = false;
  }
  mouseLeaveAllCourse():void{
    this.isShowTooltipsterCourse = "";
  }

  handleAddCourseToShoppingCard(course: ICourse):void{
    this._courseService.addCourseToShoppingCard(course);
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 3
      },
      576: {
        items: 4
      },
      992: {
        items: 5
      }
    },
    nav: true
  }
}

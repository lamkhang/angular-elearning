import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { ICategories } from 'src/app/models/categories';
import { ICourse } from 'src/app/models/course';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-my-course-categories',
  templateUrl: './my-course-categories.component.html',
  styleUrls: ['./my-course-categories.component.scss']
})
export class MyCourseCategoriesComponent implements OnInit {
  categoriesList: ICategories[] = [];
  courseByCategoriesList: ICourse[] = [];
  isActiveCategories: string = "BackEnd";

  constructor(private _courseService: CourseService) { }

  ngOnInit() {
    this._courseService.categoriesArrEmitter.subscribe( (categoriesList: ICategories[]) => {
      this.categoriesList =  categoriesList;
    }, (err) => {console.log(err)} );
    this._courseService.courseByCategoriesEmitter.subscribe( (courseByCategoriesList: ICourse[]) => {
      this.courseByCategoriesList = courseByCategoriesList;
    }, (err) => {console.log(err)} )
    this._courseService.getCategoriesArr();
    this._courseService.getCourseByCategories(this.isActiveCategories);
  }
  handleGetCourseByCategories(categories: string){
    this.isActiveCategories = categories;
    this._courseService.getCourseByCategories(categories);
  }

  customOwlCourseOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 3
      },
      992: {
        items: 3
      }
    },
    nav: true
  }

}

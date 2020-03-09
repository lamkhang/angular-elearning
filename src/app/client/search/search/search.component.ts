import { Component, OnInit, AfterViewInit, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { ICourse } from 'src/app/models/course';
import { ICategories } from 'src/app/models/categories';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{

  constructor(private _activedRoute: ActivatedRoute, private _courseService: CourseService) { }

  courseList: ICourse[] = [];
  categoriesList: ICategories[] = [];
  keySearch: string = "";
  ngOnInit() {

    this._activedRoute.params.subscribe((params) => {
      this.keySearch = params.keySearch;
      this._courseService.categoriesArrEmitter.subscribe((categoriesList: ICategories[]) => {
        this.categoriesList = categoriesList;
        let index = this.categoriesList.findIndex(item => item.maDanhMuc === params.keySearch);
        if (index !== -1) {
          this._courseService.getCourseByCategories(params.keySearch);
        }
        else {
          this._courseService.getCourseArr();
        }
      }, (err) => { console.log(err) });

      this._courseService.courseByCategoriesEmitter.subscribe((courseByCategoriesList: ICourse[]) => {
        this.courseList = courseByCategoriesList;
      }, (err) => { console.log(err) });

      this._courseService.courseArrEmitter.subscribe((courseList: ICourse[]) => {
        this.courseList = [];
        courseList.map((item) => {
          if( item.tenKhoaHoc.toLocaleLowerCase().indexOf(this.keySearch.toLocaleLowerCase()) > -1){
            this.courseList.push(item)
          }
        })
        console.log(this.courseList);

      }), (err) => { console.log(err) }
      this._courseService.getCategoriesArr();
    }, (err) => { console.log(err) })


  }
}

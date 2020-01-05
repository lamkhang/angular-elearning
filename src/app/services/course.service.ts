import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ICourse } from '../models/course';
import { ICategories } from '../models/categories';
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  categoriesArr: ICategories[] = [];
  courseArr: ICourse[] = [];
  courseByCategoriesArr: ICourse[] = [];
  courseArrInShoppingCard: ICourse[] = [];
  courseDetail: ICourse;

  @Output() categoriesArrEmitter = new EventEmitter();
  @Output() courseArrEmitter = new EventEmitter();
  @Output() courseByCategoriesEmitter = new EventEmitter();
  @Output() courseArrInShoppingCardEmitter = new EventEmitter();
  @Output() courseDetailEmitter = new EventEmitter()

  constructor(private _http: HttpClient) { }

  getCategoriesArr():void{
    this._http.get("http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc")
    .subscribe( (result: ICategories[]) => {
      this.categoriesArr = result;
      this.categoriesArrEmitter.emit(this.categoriesArr);
    }, (err) => {console.log(err)} );
  }

  getCourseArr():void{
    this._http.get("http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01")
    .subscribe( (result: ICourse[]) => {
      this.courseArr = result;
      this.courseArrEmitter.emit(this.courseArr);
    }, (err)=> {console.log(err)} );
  }

  getCourseByCategories(categories: string):void{
    this._http.get(`http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${categories}&MaNhom=GP01`)
    .subscribe( (result: ICourse[]) => {
      this.courseByCategoriesArr = result;
      this.courseByCategoriesEmitter.emit(this.courseByCategoriesArr);
    }, (err) => {console.log(err)} )
  }

  getCourseDetail(id: string):void{
    this._http.get(`http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`)
    .subscribe( (result:ICourse) => {
      this.courseDetail = result;
      this.courseDetailEmitter.emit(this.courseDetail);
    }, (err) => {console.log(err)})
  }
  addCourseToShoppingCard(course: ICourse):void{
    const index = this.courseArrInShoppingCard.findIndex(item => item.maKhoaHoc === course.maKhoaHoc)
    if(index === -1){
      this.courseArrInShoppingCard.push(course);
      this.courseArrInShoppingCardEmitter.emit(this.courseArrInShoppingCard);
    }
  }
  removeCourseOnShoppingCard(course: ICourse):void{
    const index = this.courseArrInShoppingCard.findIndex(item => item.maKhoaHoc === course.maKhoaHoc);
    if(index !== -1){
      this.courseArrInShoppingCard.splice(index, 1);
      this.courseArrInShoppingCardEmitter.emit(this.courseArrInShoppingCard);
    }
  }
}

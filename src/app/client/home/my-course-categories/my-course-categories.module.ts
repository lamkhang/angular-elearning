import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCourseCategoriesComponent } from './my-course-categories/my-course-categories.component';
import { CourseCategoriesItemComponent } from './course-categories-item/course-categories-item.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MyCourseCategoriesComponent, CourseCategoriesItemComponent],
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule
  ],
  exports: [MyCourseCategoriesComponent]
})
export class MyCourseCategoriesModule { }

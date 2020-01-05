import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyStudentComponent } from './my-student/my-student.component';
import { MyStudentItemComponent } from './my-student-item/my-student-item.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MyStudentComponent, MyStudentItemComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    CarouselModule,
    RouterModule
  ],
  exports: [MyStudentComponent]
})
export class MyStudentModule { }

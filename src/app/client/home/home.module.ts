import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCarouselComponent } from './my-carousel/my-carousel.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from "@angular/router";
import { MyIntroComponent } from './my-intro/my-intro.component';
import { MyStudentModule } from './my-student/my-student.module';
import { MyCourseCategoriesModule } from './my-course-categories/my-course-categories.module';
import { CategoriesDetailComponent } from './categories-detail/categories-detail.component';
import { EventContentComponent } from './event-content/event-content.component';

const Routes: Routes = [
  {path: "", component: HomeComponent},
]

@NgModule({
  declarations: [MyCarouselComponent, HomeComponent, MyIntroComponent, CategoriesDetailComponent, EventContentComponent],
  imports: [
    CommonModule,
    MyCourseCategoriesModule,
    MyStudentModule,
    RouterModule.forChild(Routes)
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }

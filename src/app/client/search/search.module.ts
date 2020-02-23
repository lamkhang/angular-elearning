import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { Routes, RouterModule } from '@angular/router';
import { SearchCourseItemComponent } from './search-course-item/search-course-item.component';

const Routes: Routes = [
  {path: ":keySearch" ,component: SearchComponent}
]


@NgModule({
  declarations: [SearchComponent, SearchCourseItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(Routes)
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }

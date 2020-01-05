import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { RouterModule, Routes } from "@angular/router";
const Routes: Routes = [
  {path: ":id", component: DetailComponent}
]

@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(Routes),
    // RouterModule
  ],
  exports: [DetailComponent]
})
export class DetailModule { }

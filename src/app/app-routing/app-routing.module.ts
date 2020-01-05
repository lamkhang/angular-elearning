import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { ClientComponent } from '../client/client/client.component';
const Routes: Routes = [
  {path: "" ,loadChildren: "./../client/client.module#ClientModule"},
  // {path: "admin", loadChildren: "./../admin/admin.module.AdminModule"}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(Routes)
  ]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { ClientComponent } from './client/client.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';



const Routes: Routes = [
  { path: "", component: ClientComponent, loadChildren: "./home/home.module#HomeModule" },
  { path: "course-detail" , component: ClientComponent, loadChildren: "./detail/detail.module#DetailModule" },
  { path: "search", component: ClientComponent, loadChildren: "./search/search.module#SearchModule" },
  { path: "client", component: ClientComponent, loadChildren: "./client-profile/client-profile.module#ClientProfileModule"}

]
@NgModule({
  declarations: [ClientComponent, FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(Routes),
    FormsModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [ClientComponent]
})
export class ClientModule { }

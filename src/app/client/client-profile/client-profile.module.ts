import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuardClientGuard } from 'src/app/login-guard/login-guard-client/login-guard-client.guard';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MyCourseProfileComponent } from './my-course-profile/my-course-profile.component';
import { CloseAccountProfileComponent } from './close-account-profile/close-account-profile.component';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

const Routes: Routes = [
  { path: "profile", component: ClientProfileComponent, canActivate: [LoginGuardClientGuard] }
]

@NgModule({
  declarations: [ClientProfileComponent, ViewProfileComponent, EditProfileComponent, MyCourseProfileComponent, CloseAccountProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(Routes),
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule
  ],
  exports: [
    ClientProfileComponent
  ]
})
export class ClientProfileModule { }

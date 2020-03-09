import { Component, OnInit, Input } from '@angular/core';
import { IUserProfile, IUserType } from 'src/app/models/user';
import {FormControl, Validators, NgForm} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  @Input() editUserClient: IUserProfile;
  userType: IUserType[] = [
    {value: 'GV', viewValue: 'Teacher'},
    {value: 'HV', viewValue: 'Student'},
  ];
  isValidNewPassword: boolean = true;
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.editUserClientEmitter
      .subscribe((result: any) => {
        this._userService.getInfoAccountClientAxios();
      }, (err) => {
        console.log(err);

      });

  }

  editUserClientHandler(formEditUser: NgForm){
    if(formEditUser.valid){
      if(formEditUser.value.matKhau !== formEditUser.value.matKhauRetype){
        this.isValidNewPassword = false
      }
      else{
        this.isValidNewPassword = true;
        let editUser = formEditUser.value;
        editUser = { ...editUser, taiKhoan: this.editUserClient.taiKhoan, matKhau: this.editUserClient.matKhau, maNhom:  this.editUserClient.maNhom };
        delete editUser.matKhauRetype;
        this._userService.editUserClientAxios(editUser);
      }
    }
    // console.log(formEditUser);
    // console.log(this.isValidNewPassword);




  }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.scss']
})
export class ClientProfileComponent implements OnInit {

  constructor(private _userService: UserService) { }
  isShowSessionProfile: string = "view-profile";
  titleSessionProfile: string = "Public Profile"
  ngOnInit() {
    let userClient = JSON.parse(localStorage.getItem("userClient"))
    this._userService.getInfoAccountClient(userClient.taiKhoan);

  }
  handleShowSessionProfile(sessionProfile: string): void {
    this.isShowSessionProfile = sessionProfile;

    switch (sessionProfile) {
      case "view-profile":
        this.titleSessionProfile = "Public Profile"
        break;
      case "edit-profile":
        this.titleSessionProfile = "Edit Profile"
        break;
      case "my-course-profile":
        this.titleSessionProfile = "My Course Register"
        break;
      case "close-account-profile":
        this.titleSessionProfile = "Close Account"
        break;
      default:
        break;
    }
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { IUserProfile } from 'src/app/models/user';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {

  @Input() viewUserClient: IUserProfile;

  constructor() { }

  ngOnInit() {


  }

}

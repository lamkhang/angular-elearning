import { Component, OnInit } from '@angular/core';
import { ICourse } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  courseArrInShoppingCard:ICourse[] = [];
  constructor(private _courseService: CourseService, private _userService: UserService) { }
  isShowHeaderDropdownMenu:boolean = false;
  isShowShoppingCartMenu: boolean = false;
  isOnShoppingCartMenu:boolean= false;
  isShowHeaderModal: string= "";

  ngOnInit() {
    this._courseService.courseArrInShoppingCardEmitter.subscribe( (courseList: ICourse[]) => {
      this.courseArrInShoppingCard = [...courseList];
    }, (err) => {console.log(err)} )
  }
  handleShoweaderDropdownMenu():void{
    this.isShowHeaderDropdownMenu = !this.isShowHeaderDropdownMenu;
  }
  handleIsShowShoppingCartMenu(bool:boolean):void{
    this.isShowShoppingCartMenu = bool;
  }
  handleOnShoppingCartMenu():void{
    this.isShowShoppingCartMenu = true;
  }
  handleRemoveCourseOnShoppingCard(course: ICourse):void{
    this._courseService.removeCourseOnShoppingCard(course);
  }
  handleOpenHeaderModal(isShowHeaderModal: string):void{
    this.isShowHeaderModal = isShowHeaderModal;
  }
  handleCloseHeaderModal(form: NgForm):void{
    this.isShowHeaderModal = "";
    form.resetForm()
  }
  signInHandler(formSignIn: NgForm):void{
    if(formSignIn.valid){
      this._userService.signIn(formSignIn.value.taiKhoan, formSignIn.value.matKhau , () => {formSignIn.resetForm()});
      this.isShowHeaderModal = "";
    }
  }
  signUpHandler(formSignUp: NgForm):void{
    if(formSignUp.valid){
      let value = { ...formSignUp.value, maNhom: "GP03"}
      this._userService.signUp(value, () => {formSignUp.resetForm()});
    }
  }
}

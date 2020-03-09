import { Component, OnInit } from '@angular/core';
import { ICourse } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { ICategories } from 'src/app/models/categories';
import { ToastrService } from 'ngx-toastr';
import $ from "jquery";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  courseArrInShoppingCard:ICourse[] = [];

  constructor(private _courseService: CourseService, private _userService: UserService, private _router: Router, private toastr: ToastrService) { }

  isShowHeaderDropdownMenu:boolean = false;
  isShowShoppingCartMenu: boolean = false;
  isShowUserMenu: boolean = false;
  isShowHeaderModal: string= "";
  isSignIn:string = "";

  ngOnInit() {

    this._courseService.courseArrInShoppingCardEmitter.subscribe( (courseList: ICourse[]) => {
      this.courseArrInShoppingCard = [...courseList];
    }, (err) => {console.log(err)} );


    if(localStorage.getItem("userClient")){
      this.isSignIn = (JSON.parse( localStorage.getItem("userClient") )).hoTen;
    }
  }
  handleShoweaderDropdownMenu():void{
    this.isShowHeaderDropdownMenu = !this.isShowHeaderDropdownMenu;
  }
  handleIsShowShoppingCartMenu(bool:boolean):void{
    this.isShowShoppingCartMenu = bool;
  }

  handleIsShowUserMenu(bool:boolean):void{
    this.isShowUserMenu = bool;
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
  searchHandler(formSearch: NgForm):void{
    this._router.navigate([`/search/${formSearch.value.keySearch}`]);

  }
  signInHandler(formSignIn: NgForm):void{
    if(formSignIn.valid){
      this._userService.signIn(formSignIn.value.taiKhoan, formSignIn.value.matKhau , () => {
        formSignIn.resetForm();
        this.isSignIn = (JSON.parse( localStorage.getItem("userClient") )).hoTen;
      });
      this.isShowHeaderModal = "";

    }
  }
  signUpHandler(formSignUp: NgForm):void{
    if(formSignUp.valid){
      let value = { ...formSignUp.value, maNhom: "GP03"}
      this._userService.signUp(value, () => {formSignUp.resetForm()});
      this.isSignIn = value.hoTen;
    }
  }

  handleLogOut(): any{
    this.toastr.warning('<div class="btn btn-light px-3 py-2 confirmClientLogout">Yes</div>', "Are you want logout", {
      positionClass: 'toast-center-center',
      disableTimeOut: true,
      closeButton: true,
      enableHtml: true,
      onActivateTick: true,
      tapToDismiss: false,
    })
    .onShown.subscribe( () => {
      $(".confirmClientLogout").click(() => {
        // console.log(this);
        this.toastr.clear();
        localStorage.removeItem('userClient');
        this.isSignIn = "";
        window.location.reload();
      });

    })
  }
}

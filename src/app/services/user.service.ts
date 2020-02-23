import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IUser } from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

// const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json; charset=utf-8',
    //     'Authorization': `Bearer ${JSON.parse(localStorage.getItem("userClient")).accessToken}`
    //   })
    // };

@Injectable({
  providedIn: 'root'
})

export class UserService {
  userClient: any;
  matKhau: String;
  @Output() userClientEmitter = new EventEmitter();
  constructor(private _http: HttpClient, private _router: Router, private toastr: ToastrService) { }

  signUp(user: IUser, callback: Function): void {
    this._http.post("http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy", user)
      .subscribe((result) => {
        console.log(result);
        callback()

      }, (err) => {
        console.log(err);
        this.toastr.error(err.error, "Oops", {
          timeOut: 3000,
          positionClass: 'toast-top-center',
          progressBar: true,
        });
      })
  }

  signIn(userName: string, password: string, callback: Function): void {
    this._http.post("http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap", {
      taiKhoan: userName,
      matKhau: password
    })
      .subscribe((result) => {
        localStorage.setItem("userClient", JSON.stringify(result));
        this.matKhau = this.matKhau
        this.userClient = result;
        this.userClientEmitter.emit(this.userClient);
        this.toastr.success("Login success", "", {
          timeOut: 3000,
          positionClass: 'toast-top-center',
          progressBar: true,
        });
        callback();
      }, (err) => {
        console.log(err);
        this.toastr.error(err.error, "Oops", {
          timeOut: 3000,
          positionClass: 'toast-top-center',
          progressBar: true,
        });
      })
  }

  getInfoAccountClient(taiKhoan: string): void {

    // var header = new HttpHeaders({
    //   'Content-Type':  'application/json; charset=utf-8',
    //   'Authorization': `Bearer ${JSON.parse(localStorage.getItem("userClient")).accessToken}`
    // })
    // const header = new HttpHeaders({"Authorization": `Bearer ${JSON.parse(localStorage.getItem("userClient")).accessToken}`});
    // let options = new RequestOptions({headers: header});
    // this._http.post(
    //   "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
    //   {
    //     taiKhoan,
    //     matKhau: "khanglam"
    //   },
    //   {
    //     headers: header
    //   })

    httpOptions.headers = httpOptions.headers.set(
      "Authorization",
      `Bearer ${JSON.parse(localStorage.getItem("userClient")).accessToken}`
    );

    console.log(httpOptions.headers.getAll("Authorization"));
    console.log(httpOptions.headers);
    console.log(typeof `Bearer ${JSON.parse(localStorage.getItem("userClient")).accessToken}`);

    this._http.post('http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan',  {
          taiKhoan,
          matKhau: "khanglam"
        }, httpOptions)


      .subscribe((result) => {
        console.log(result);
      }, (err) => {
        console.log(err);
      })
  }
}

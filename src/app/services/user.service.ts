import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IUser } from '../models/user';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
// import { Headers } from "@angular/http";
import Axios from "axios";


// const httpOptions = {
//   headers: new Headers({
//     'Content-Type': 'application/json; charset=utf-8',
//     'Authorization': `Bearer ${JSON.parse(localStorage.getItem("userClient")).accessToken}`
//   })
// };


@Injectable({
  providedIn: 'root'
})

export class UserService {
  userClient: any;
  userClientProfile: any;

  matKhau: String;

  @Output() userClientEmitter = new EventEmitter();
  @Output() userClientProfileEmitter = new EventEmitter();
  @Output() editUserClientEmitter = new EventEmitter()

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

  getInfoAccountClient(taiKhoan: string): Observable<any> {

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

    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json; charset=utf-8',
    //     'Authorization': `Bearer ${JSON.parse(localStorage.getItem("userClient")).accessToken}`
    //   })
    // };

    let header = new HttpHeaders({ 'Authorization': `Bearer ${JSON.parse(localStorage.getItem("userClient")).accessToken}` });
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    header = header.set('Authorization',  `Bearer ${JSON.parse(localStorage.getItem("userClient")).accessToken}`);
    console.log(header);


    let obServe = this._http.post('http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan', {
      taiKhoan,
      matKhau: "khanglam"
    }, {headers: header})
      // .pipe(map((res: Response) => res.json()));
      .pipe(
        tap(
          () => {console.log(123),
          () => {console.log("errrrrror")}



      }));
    return obServe;
  }
  getInfoAccountClientAxios():void{
    Axios({
      method: "POST",
      url: "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      data: {
        taiKhoan: "khanglam",
        matKhau: "khanglam"
      },
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("userClient")).accessToken}`
      }
    })
    .then(result => {
      this.userClientProfileEmitter.emit(result);
    })
    .catch(err => {
      console.log(err);
    })
    // console.log("getInfoAccountClientAxios");

  }
  editUserClientAxios(userEdit: { IUser, maLoaiNguoiDung: string }): void{
    Axios({
      method: "PUT",
      url: "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      data: userEdit,
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("userClient")).accessToken}`
      }
    })
    .then(result => {
      this.editUserClientEmitter.emit(result)
    })
    .catch(err => {
      console.log(err)
    })
  }
}

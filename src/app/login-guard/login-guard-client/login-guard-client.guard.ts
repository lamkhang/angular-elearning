import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import $ from "jquery";

@Injectable({
  providedIn: 'root'
})
export class LoginGuardClientGuard implements CanActivate {
  constructor(private _router: Router, private toastr: ToastrService) { };
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem("userClient")){
      return true
    }
    this.toastr.warning('<div class="btn btn-light px-3 py-2 confirmClientLogIn">Yes</div>', "You  need to login", {
      positionClass: 'toast-center-center',
      disableTimeOut: true,
      closeButton: true,
      enableHtml: true,
      onActivateTick: true,
      tapToDismiss: false,
    })
    .onShown.subscribe( () => {
      $(".confirmClientLogIn").click(() => {
        console.log(this);
        this.toastr.clear();
        this._router.navigate(["/"]);
      });
    })
    return false;
  }

}

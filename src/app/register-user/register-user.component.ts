import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Userlogin } from '../userlogin';
import { UserserviceService } from '../userservice.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {

  userModel = new User();
  userLogin = new Userlogin();
  msg: any = "";
  loggedIn=false;

  constructor(private _userService: UserserviceService, private _router: Router, private _activatedRoute: ActivatedRoute) { }

  addUser() {
    this._userService.register(this.userModel)
      .subscribe(
        data => {
          console.log("success ", data);
          this._router.navigate(['login']);
        },
        err => {
          this.msg = err.error;
        }
      )
  }

  loginUser() {

    this._userService.login(this.userLogin)
      .subscribe(
        data => {
          localStorage.setItem('currentUser', JSON.stringify(data))
          this._router.navigate(['userpage']);
        },
        err => {
          this.msg = err.error;
        }
      )
  }
  logout(){
    localStorage.removeItem('currentUser');
  }

}

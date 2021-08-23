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
export class RegisterUserComponent{

  userModel=new User("","","","","");
  userLogin=new Userlogin("","");
  msg="";

  constructor(private _userService: UserserviceService,private router:Router,private activatedRoute:ActivatedRoute){}
  
  addUser(){
    this._userService.register(this.userModel)
    .subscribe(
      data=> {
        console.log("success ",data);
        this.userModel=new User("","","","","");
    },
      error=> console.log("message",error)
    )
  }

  loginUser(){
    
    console.log(this.userLogin);
    this._userService.login(this.userLogin)
    .subscribe(
      data=> {
          this.router.navigate(['userpage']);
    },
    err=>{console.log("error got",err);
    }
    )
  }

}

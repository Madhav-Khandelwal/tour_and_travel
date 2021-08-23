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
  constructor(private _userService: UserserviceService,private router:Router,private activatedRoute:ActivatedRoute){}
  
  addUser(){
    this._userService.register(this.userModel)
    .subscribe(
      data=> {
        console.log("success ",data);
    },
      error=> console.log("message",error)
    )
  }

  loginUser(){
    
    console.log(this.userLogin);
    this._userService.login(this.userLogin)
    .subscribe(
      data=> {
        if(data==true)
          this.router.navigate(['userpage']);
        else
          console.log("Please enter correct email/password");
    },
    err=>{console.log("error got",err);
    }
    )
  }

}

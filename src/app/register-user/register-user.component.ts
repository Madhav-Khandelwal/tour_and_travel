import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent{

  userModel=new User("","","","","");
  constructor(private _userService: UserserviceService){}
  
  addUser(){
    this._userService.register(this.userModel)
    .subscribe(
      data=> console.log("success ",data),
      error=> console.log("fail",error)

    )
  }

}

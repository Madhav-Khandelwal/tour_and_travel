import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from '../feedback';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackModel:Feedback;
  constructor(private _userService:UserserviceService,private _router:Router) { }

  ngOnInit(): void {
    if(this._userService.getUserId()==0)
    {
      this._router.navigate(['login']);
    }
  }

  onSubmit(){
    this.feedbackModel.user.userId=this._userService.getUserId();
    this._userService.saveFeedback(this.feedbackModel)
    .subscribe(
      data=> console.log(data),
      error=> console.log(error)
    )

  }

}

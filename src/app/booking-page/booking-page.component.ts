import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingDetail } from '../booking-detail';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent implements OnInit{

  bookingModel=new BookingDetail();
  constructor(private _router:ActivatedRoute,private _userService:UserserviceService) { }
  id:any;
  journeyDate:any;
  user:any;
  ngOnInit(){
    let param1=this._router.snapshot.paramMap.get('id');
    this.journeyDate=this._router.snapshot.paramMap.get('date');
    this.id= param1!=null?parseInt(param1):null;
    
  }
  onSubmit(){
    this.bookingModel.paymentDate=new Date();
    this.bookingModel.paymentTime=Date.now();

    let local=localStorage.getItem('currentUser');
    this.user=local!=null?JSON.parse(local):null;
    this.bookingModel.userId=this.user.user_id;
    this.bookingModel.journeyDate=this.journeyDate;
    this.bookingModel.transportId=this.id;

    this._userService.saveBooking(this.bookingModel)
      .subscribe(
        data => {
          console.log("success ", data);
        //  this.contact_msg= "Detail submitted successfully";
        },
        err => {
         // this.contact_msg = "fail to send";
        }
      )

  }

  

}

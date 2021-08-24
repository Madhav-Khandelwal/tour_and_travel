import { Component, OnInit } from '@angular/core';
import { BookingDetail } from '../booking-detail';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent{

  bookingModel=new BookingDetail();
  constructor() { }

  onSubmit(){

  }

  

}

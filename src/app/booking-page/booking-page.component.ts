import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingDetail } from '../booking-detail';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent implements OnInit{

  bookingModel=new BookingDetail();
  constructor(private _router:ActivatedRoute) { }

  ngOnInit(){
    let param1=this._router.snapshot.paramMap.get('id');
    let date=this._router.snapshot.paramMap.get('date');
    let id=param1!=null?parseInt(param1):null;
    console.log("id="+id+" date="+date);
  }
  onSubmit(){

  }

  

}

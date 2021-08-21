import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  _url="http://localhost:8090/user/save";
  constructor(private _http:HttpClient) { }

  register(user: User){
    return this._http.post<any>(this._url,user);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{User} from './user';
import { Userlogin } from './userlogin';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  _url="http://localhost:8090/user";
  constructor(private _http:HttpClient) { }

  register(user: User){
    return this._http.post<any>(`${this._url}/save`,user);
  }
  login(userlogin: Userlogin){
    return this._http.post<any>(`${this._url}/login`,userlogin)
    
  }
}

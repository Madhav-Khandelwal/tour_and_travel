import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{User} from './user';
import { Userlogin } from './userlogin';
import { Contactus } from './contactus';
import { Transport } from './transport';
import { Observable } from 'rxjs';

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
  saveContactUs(contactus: Contactus){
    return this._http.post<any>(`${this._url}/contactus`,contactus);
    
  }
  getTransport(transport: Transport):Observable<Transport[]>{
    return this._http.get<Transport[]>(`${this._url}/get_transport?source=${transport.source}&destination=${transport.destination}&type=${transport.type}`);
    
  }
}

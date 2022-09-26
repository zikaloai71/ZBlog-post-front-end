import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs"
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  urlPath='http://localhost:3000/'

  public loginFlag = false 

  constructor(private http : HttpClient) { }

  signUp(obj:any):Observable <any>{
    return this.http.post(`${this.urlPath}user/signUp`, obj)
  }
  logIn(obj:any):Observable <any>{
    return this.http.post(`${this.urlPath}user/logIn`, obj)
  }

}

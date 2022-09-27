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
  
  authMe():Observable <any> {
    return this.http.get(`${this.urlPath}user/me`)
  }
  
  logOut():Observable <any>{
    return this.http.post(`${this.urlPath}user/logOut`, null)
  }
  myPosts():Observable <any>{
    return this.http.get(`${this.urlPath}post/myPosts`)
  }
  
  addPost(obj:any):Observable <any>{
    return this.http.post(`${this.urlPath}post/addPost`,obj)
  }

  deletePost(id:any):Observable <any>{
    return this.http.delete(`${this.urlPath}post/myPosts/deletePost/${id}`)
  }


}

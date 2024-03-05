import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { User } from './interface/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { Userlogin } from './interface/userlogin';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthnService {

  username =new BehaviorSubject("")
  isLogin =new BehaviorSubject(false)
  constructor(private _HttpClient:HttpClient,private _Router:Router) {

    if (localStorage.getItem('token')) {
      this.isLogin.next(true)
    }
  }
  


   signUp(user:User):Observable<any>{
    return this._HttpClient.post('https://route-ecommerce.onrender.com/api/v1/auth/signup',user)
   }
   
   signIn(user:Userlogin):Observable<any>{
    return this._HttpClient.post('https://route-ecommerce.onrender.com/api/v1/auth/signin',user)
   }

   forgetPassword(userEmail:EmailValidator){
    return this._HttpClient.post("https://route-ecommerce.onrender.com/api/v1/auth/forgotPasswords",{email:userEmail})
   }

}

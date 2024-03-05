import { Component, OnInit, inject } from '@angular/core';
import { AuthnService } from '../authn.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { jwtDecode } from 'jwt-decode';
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent {
  apiResponse: any
  constructor(private _AuthnService:AuthnService,private _Router :Router){
  }

  Loginform = new FormGroup({
    email: new FormControl(null,[Validators.required ,Validators.email]),
  })

  signIn(formdata:any){

    formdata.markAllAsTouched()
    
    if (formdata.valid) {
      this._AuthnService.forgetPassword(formdata.value.email).subscribe({
        next:(response)=>{console.log(response);
          // this.apiResponse=response.message
        },
        error:(err)=>{err.error.message}
      })
    }
  }
}

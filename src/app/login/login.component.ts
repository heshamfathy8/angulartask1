import { Component, OnInit, inject } from '@angular/core';
import { AuthnService } from '../authn.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { jwtDecode } from 'jwt-decode';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  apiResponse: string=" ";
  constructor(private _AuthnService:AuthnService,private _Router :Router,private _CartService:CartService){
  }

  Loginform = new FormGroup({
    email: new FormControl(null,[Validators.required ,Validators.email]),
    password: new FormControl(null,[Validators.required ,Validators.pattern(/^[A-Z][A-Z|a-z|0-9|@]{8,10}$/) ]),
  })

  signIn(formdata:any){

    formdata.markAllAsTouched()
    
    if (formdata.valid) {
      this.apiResponse="";
       this._AuthnService.signIn(formdata.value).subscribe({
      next: (response)=>{console.log(response);
        this.apiResponse = response.message
        this._Router.navigate(['/home'])
        this._AuthnService.isLogin.next(true)

        localStorage.setItem('token',response.token)
        let token:any = response.token
      let decode:any=jwtDecode(token)
      this._AuthnService.username.next(decode.name)

      this._CartService.getLoggedUserCart(token).subscribe({
        next:(res)=>{this._CartService.numOfCartItems.next(res.numOfCartItems)}
      })
      },
      

      error:(error)=>{console.log(error);
        this.apiResponse = error.error.message

    }
       })
    }
  }
  
    

  
}

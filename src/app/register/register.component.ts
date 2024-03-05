import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthnService } from '../authn.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private _AuthnService:AuthnService,private _Router :Router){}

  apiResponse :string =" "

  registerform = new FormGroup({
    name : new FormControl(null,[Validators.required ,Validators.minLength(3),Validators.maxLength(10)]),
    email: new FormControl(null,[Validators.required ,Validators.email]),
    password: new FormControl(null,[Validators.required ,Validators.pattern(/^[A-Z][A-Z|a-z|0-9|@]{8,10}$/) ]),
    rePassword: new FormControl(null,[Validators.required ,Validators.pattern(/^[A-Z][A-Za-z0-9@]{8,10}$/)]),
    phone: new FormControl(null,[Validators.required ,Validators.pattern(/^(010|012|011)[0-9]{8}$/)]),
  })

  signUp(formdata:any){
    console.log(formdata);
    if (formdata.valid && formdata.get('rePassword').value === formdata.get('password').value ) {
        this.apiResponse=""
      this._AuthnService.signUp(formdata.value).subscribe({
        next: (response)=>{console.log(response);
          this.apiResponse = response.message

          this._Router.navigate(['/login'])

        },
        error:(error)=>{console.log(error);
          this.apiResponse = error.error.message
          
        }
      })
    }
    
  }
}

import { HomeComponent } from './../home/home.component';
import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { AuthnService } from '../authn.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  username:any=""
  numOfCartItems:any  //localStorage.getItem("numOfCartItems")
  usertoken:any=localStorage.getItem('token')
  

  constructor(private _AuthnService:AuthnService,private _CartService:CartService){
    
    $(window).scroll(function () {
      
      if ($(window).scrollTop() != 0) {
        $('nav').removeClass('py-4')
        
      }else{
        $('nav').addClass('py-4')
      }
    })

  }
    navEnable:boolean=false
    signout():void{
      this.navEnable=false;
      localStorage.removeItem('token')
    }
    ngOnInit():void{

      

      this._AuthnService.isLogin.subscribe({
        next:(x)=>{this.navEnable=x
        }
      })

      this._CartService.numOfCartItems.subscribe({
        next:(val)=>{this.numOfCartItems=val
        console.log(val);
        }
      })

      if (localStorage.getItem('token')) {
        let tokens:any = localStorage.getItem('token')
        let decodes:any=jwtDecode(tokens)
        this._AuthnService.username.next(decodes.name)
      }

      this._AuthnService.username.subscribe({
        next:(name)=>{this.username=name
        }
    })
  
    }

   
    
}
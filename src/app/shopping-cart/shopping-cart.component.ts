import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  usertoken=localStorage.getItem('token')
  constructor(private _ShoppingCartService:ShoppingCartService,private _ActivatedRoute:ActivatedRoute){}

  shoppingCartForm = new FormGroup({
    Details : new FormControl(null,[Validators.required]),
    Phone : new FormControl(null,[Validators.required ,Validators.pattern(/^(010|012|011)[0-9]{8}$/)]),
    City : new FormControl(null,[Validators.required])
  })

  payment(form:any){
    
    if(form.valid){
    let id=this._ActivatedRoute.snapshot.params['pro_id']
    this._ShoppingCartService.payment(id,form,this.usertoken).subscribe({
      next:(response)=>{
        console.log(response.session.url);
        
          location.href= response.session.url;
      }
    })
  }
}

}

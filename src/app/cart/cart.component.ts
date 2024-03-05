import { product } from './../interface/product';
import { ToastrService } from 'ngx-toastr';
import { Data, ProductCart, ProductDetails, ProductElement } from '../interface/user-card-items';
import { CartService } from './../cart.service';
import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit{

  products:ProductElement[]=[]  
  usertoken:any = localStorage.getItem('token')
  totalCartPrice:any
  pro_id:any
  p_count:any
  constructor(private _CartService:CartService,private _ToastrService:ToastrService,private _Router:Router){}

  ngOnInit(): void {

    this._CartService.getLoggedUserCart(this.usertoken).subscribe({
      next:(response)=>{console.log(response);
        this.products=response.data.products
        this.totalCartPrice=response.data.totalCartPrice
       this.pro_id =response.data._id                
      },
      error:(err)=>{console.log(err);
      }
    })

    this._CartService.numOfCartItems.subscribe({
      next:(val)=>{this.p_count=val
      }
    })
    


  }

  DeleteItem(id:string){
    this._CartService.DeleteItem(id,this.usertoken).subscribe({
      next:(response)=>{
        console.log(response);
        this.products=response.data.products
        this._CartService.numOfCartItems.next(response.numOfCartItems)
        this.totalCartPrice=response.data.totalCartPrice
        this.ShowDelete("Product Deleted!")
      }
    })
  }

  ShowDelete(x:string){
    this._ToastrService.error(x)
  }

  UpdateProductPlus(id:string,count:any){
    count++
    this._CartService.UpdateProduct(id,this.usertoken,count).subscribe({
      next:(response)=>{
        console.log(response);
        this.products=response.data.products
        this.totalCartPrice=response.data.totalCartPrice
    }
  })
}
  UpdateProductMinus(id:string,count:any){
    count--
    this._CartService.UpdateProduct(id,this.usertoken,count).subscribe({
      next:(response)=>{
        console.log(response);
        this.products=response.data.products
        this.totalCartPrice=response.data.totalCartPrice
    }
  })
}

clear(){
  this._CartService.ClearUserCart(this.usertoken).subscribe({
    next:(response)=>{console.log(response)
      this.ShowDelete("Cart is Empty!");
      this._CartService.numOfCartItems.next("")
      this.products=[]
      this.totalCartPrice=0
     
    }
  })
}
}
import { product } from './../interface/product';
import { category } from './../interface/category';
import { Component, Injectable, OnInit } from '@angular/core';
import {ProductService} from '../productservice.service'
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../cart.service';
import { WishListService } from '../wish-list.service';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private _productservice:ProductService,private toastr: ToastrService,private _CartService:CartService,private _WishListService:WishListService){
    
    
  }
  products:product[]=[]
  Categories:category[]=[]
  searchword:string=""
  usertoken:any=localStorage.getItem('token')
  ngOnInit():void{


    this._productservice.getproducts().subscribe({
      next:(response)=>{
        this.products=response.data
        console.log(this.products)
      },
      error:(error)=>{console.log(error)},
    })
   
      this._productservice.getcategories().subscribe({
        next:(response)=>{
          this.Categories=response.data
          console.log(this.Categories)
        },
        error:(error)=>{console.log(error)},
      })


    }
      

    AddOrDel(i:any,id:any){
      if($(i.target).hasClass('fa-solid')){
       this.DeleteProduct(i,id)
      } else{
        this.addtowishlist(i,id)
      }
    }
    
    addtowishlist(i:any,id:any){
      this._WishListService.addtowishlist(id,this.usertoken).subscribe({
        next:(response)=>{console.log(response);
          this.showSuccess("Product added to wishlist")
          $(i.target).toggleClass('fa-solid')
        },
      })
    }

    DeleteProduct(i:any,id:any){
      this._WishListService.DeleteProduct(id,this.usertoken).subscribe({
        next:(response)=>{console.log(response);
          this.showRemove("Product Removed From wishlist")
          $(i.target).toggleClass('fa-solid')
        },
      })
    }







  addToCart(id:string){
    this._CartService.addToCart(id,this.usertoken).subscribe({
      next:(response)=>{console.log(response);
        this.showSuccess("Product Added!")
        this._CartService.numOfCartItems.next(response.numOfCartItems)

      },
      error:(error)=>{console.log(error);
        }
    })
  }

  showSuccess(x:string) {
    this.toastr.success(x);
  }
  showRemove(x:string) {
    this.toastr.error(x);
  }

   
  
}

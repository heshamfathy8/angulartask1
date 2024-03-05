import { Component, OnInit } from '@angular/core';
import { WishListService } from '../wish-list.service';
import { product } from '../interface/product';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit{
  products:product[]=[]
  usertoken:any=localStorage.getItem('token')
  searchword: string=""

  constructor(  private _WishListService:WishListService ,private _HomeComponent:HomeComponent){}

  ngOnInit(): void {
    this._WishListService.getWishList(this.usertoken).subscribe({
      next:(response)=>{console.log(response);
        this.products=response.data

      },
      error:(error)=>{console.log(error);
        }
    })
  }

  addToCart(id:any){
    this._HomeComponent.addToCart(id)
  }
  
  DeleteProduct(i:any,id:any){
    this._WishListService.DeleteProduct(id,this.usertoken).subscribe({
      next:(response)=>{console.log(response);
        this._HomeComponent.showRemove("Product Removed From wishlist")
        $(i.target).toggleClass('fa-solid')
        this._WishListService.getWishList(this.usertoken).subscribe({
          next:(response)=>{console.log(response);
            this.products=response.data
    
          },
          error:(error)=>{console.log(error);
            }
        })
      },
    })
  }

}

import { HomeComponent } from './../home/home.component';
import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../productservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
    constructor(private _productservice:ProductService, private _ActivatedRoute:ActivatedRoute,private _home:HomeComponent){}

    SingleProduct :any =null
    ngOnInit(): void{
      let x=this._ActivatedRoute.snapshot.params['productId']
      console.log(x);
      
       this._productservice.getproductdetails(x).subscribe((response)=>
       {
        this.SingleProduct = response.data
        console.log(response.data);
       })
    }
    addtocard(id:any){
      this._home.addToCart(id)
    }
}

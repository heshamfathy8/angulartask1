import { product } from './../interface/product';
import { category } from './../interface/category';
import { Component, Injectable, OnInit, inject } from '@angular/core';
import {ProductService} from '../productservice.service'
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent {
  constructor(private _productservice:ProductService,private toastr: ToastrService,private _CartService:CartService,private _ActivatedRoute:ActivatedRoute){
  }
  
  products:any
  ngOnInit():void{
    
   let id= this._ActivatedRoute.snapshot.params["id"]
    this._productservice.getSpecificCategory(id).subscribe({
      next:(response)=>{
        this.products=response.data
      },
      error:(error)=>{console.log(error)},
    })
   
    

 

  }  
}

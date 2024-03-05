import { Router } from '@angular/router';
import { ProductService } from './../productservice.service';
import { Component, OnInit, inject } from '@angular/core';
import { category } from '../interface/category';
import { BrandsService } from '../brands.service';
@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent {
  brands :category[]=[]
  constructor(private _ProductService:ProductService,private _router:Router,private _BrandsService:BrandsService){}

  ngOnInit(): void {
    this._BrandsService.getBrands().subscribe({
      next:(response)=>{console.log(response);
        this.brands=response.data
      }
    })
  }

  getSpecificBrand(id:any){
    this._router.navigate([`brands/${id}`])
    
  }
}

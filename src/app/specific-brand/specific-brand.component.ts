import { ActivatedRoute } from '@angular/router';
import { Brand } from './../interface/product';
import { Component } from '@angular/core';
import { BrandsService } from '../brands.service';

@Component({
  selector: 'app-specific-brand',
  templateUrl: './specific-brand.component.html',
  styleUrls: ['./specific-brand.component.css']
})
export class SpecificBrandComponent {
  brand:any
  constructor(private _BrandService:BrandsService,private _ActivatedRoute:ActivatedRoute){
  }
  
  ngOnInit():void{
    
   let id= this._ActivatedRoute.snapshot.params["id"]
    this._BrandService.getSpecificBrand(id).subscribe({
      next:(response)=>{
        this.brand=response.data
      },
      error:(error)=>{console.log(error)},
    })
   
    

 

  }  
}

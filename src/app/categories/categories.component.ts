import { Router } from '@angular/router';
import { ProductService } from './../productservice.service';
import { Component, OnInit, inject } from '@angular/core';
import { category } from '../interface/category';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories :category[]=[]
  constructor(private _ProductService:ProductService,private _router:Router){}

  ngOnInit(): void {
    this._ProductService.getcategories().subscribe({
      next:(response)=>{console.log(response);
        this.categories=response.data
      }
    })
  }

  getProduct(id:any){
    this._router.navigate([`cateprod/${id}`])
    
  }

}

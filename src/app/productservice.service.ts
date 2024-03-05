import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { product } from './interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _HttpClient:HttpClient) { }

  getproducts():Observable<any>{
    return this._HttpClient.get('https://route-ecommerce.onrender.com/api/v1/products')
  }

  getcategories():Observable<any>{
   return  this._HttpClient.get('https://route-ecommerce.onrender.com/api/v1/categories')
  }

  getproductdetails(id:number):Observable<any>{
    return  this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/products/${id}`)
  }

  getSpecificCategory(id:any):Observable<any>{
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/categories/${id}`)
  }
}

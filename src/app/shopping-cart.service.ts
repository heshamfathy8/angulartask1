import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private _HttpClient:HttpClient) { }

  payment(id:any,form:any,usertoken:any):Observable<any>{
    return this._HttpClient.post(`https://route-ecommerce.onrender.com/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,form.value,{headers:{token:usertoken}})
  }
}

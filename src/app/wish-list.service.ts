import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  constructor(private _HttpClient:HttpClient) { }

  addtowishlist(id:any,usertoken:any):Observable<any>{
    return this._HttpClient.post("https://route-ecommerce.onrender.com/api/v1/wishlist",{productId:id},{headers:{token:usertoken}})
  }

  getWishList(usertoken:any):Observable<any>{
    return this._HttpClient.get("https://route-ecommerce.onrender.com/api/v1/wishlist",{headers:{token:usertoken}})
  }

  DeleteProduct(id:any,usertoken:any):Observable<any>{
    return this._HttpClient.delete(`https://route-ecommerce.onrender.com/api/v1/wishlist/${id}`,{headers:{token:usertoken}})
  }
  


}

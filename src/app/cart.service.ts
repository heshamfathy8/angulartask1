import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  usertoken:any=localStorage.getItem("token")
 numOfCartItems =new BehaviorSubject("")

  constructor(private _HttpClient:HttpClient) {
    if (this.usertoken) {
      this.getLoggedUserCart(this.usertoken).subscribe({
        next:(response)=>{console.log(response);
         this.numOfCartItems.next(response.numOfCartItems)
        },
      })
     }
    }
    
  
  getLoggedUserCart(usertoken:string):Observable<any>{
    return this._HttpClient.get("https://route-ecommerce.onrender.com/api/v1/cart",{headers:{token:usertoken}})
  }

  addToCart(_id:string,usertoken:string):Observable<any>{
    return this._HttpClient.post("https://route-ecommerce.onrender.com/api/v1/cart",{productId:_id},{headers:{token:usertoken}}) 
  }

  DeleteItem(id:string,token:string):Observable<any>{
    return this._HttpClient.delete(`https://route-ecommerce.onrender.com/api/v1/cart/${id}`,{headers:{token:token}})
  }

  UpdateProduct(id:string,token:string,pcount:any):Observable<any>{ 
    return this._HttpClient.put(`https://route-ecommerce.onrender.com/api/v1/cart/${id}`,{count:pcount},{headers:{token:token}})
}

ClearUserCart(usertoken:string):Observable<any>{
  return this._HttpClient.delete("https://route-ecommerce.onrender.com/api/v1/cart",{headers:{token:usertoken}})
}

}

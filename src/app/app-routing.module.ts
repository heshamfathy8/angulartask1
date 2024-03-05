import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BrandsComponent } from './brands/brands.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { pathGuard } from './path.guard';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { SpecificBrandComponent } from './specific-brand/specific-brand.component';
import { WishListComponent } from './wish-list/wish-list.component';

const routes: Routes = [
  {path:"",redirectTo:"/register",pathMatch:"full"},
  {path:"contact",component:ContactComponent,title:"contact",canActivate:[pathGuard]},
  {path:"home", component:HomeComponent,title:"home",canActivate:[pathGuard]},
  {path:"brands",component:BrandsComponent,title:"brands",canActivate:[pathGuard]},
  {path:"wishlist",component:WishListComponent,title:"WishList",canActivate:[pathGuard]},
  {path:"login",component:LoginComponent,title:"login",},
  {path:"cart",component:CartComponent,title:"cart",canActivate:[pathGuard]},
  {path:"cateprod/:id",component:CategoryProductsComponent,title:"products",canActivate:[pathGuard]},
  {path:"forgetpassword",component:ForgetpasswordComponent,title:"forgetpassword",},
  {path:"brands/:id",component:SpecificBrandComponent,title:"brand",canActivate:[pathGuard]},
  {path:"shoppingcart/:pro_id",component:ShoppingCartComponent,title:"shoppingcart",canActivate:[pathGuard]},
  {path:"register",component:RegisterComponent,title:"register"},
  {path:"productdetails/:productId",component:ProductDetailsComponent,title:"productdetails",canActivate:[pathGuard]},
  {path:"categories",component:CategoriesComponent,title:"categories",canActivate:[pathGuard]},
  {path:"**",component:NotfoundComponent,title:"Notfound"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

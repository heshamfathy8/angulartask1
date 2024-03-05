import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { FootingComponent } from './footing/footing.component';
import { NotfoundComponent } from './notfound/notfound.component';
import * as $ from 'jquery';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrandsComponent } from './brands/brands.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SliderComponent } from './slider/slider.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { FormsModule,} from '@angular/forms'; // <-- #1 import module
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { SearchPipe } from './search.pipe'; // <-- #2 import module
import { ToastrModule } from 'ngx-toastr';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { SpecificBrandComponent } from './specific-brand/specific-brand.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { WishListComponent } from './wish-list/wish-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ContactComponent,
    FootingComponent,
    NotfoundComponent,
    CartComponent,
    CategoriesComponent,
    BrandsComponent,
    SliderComponent,
    ProductDetailsComponent,
    RegisterComponent,
    LoginComponent,
    SearchPipe,
    ShoppingCartComponent,
    CategoryProductsComponent,
    SpecificBrandComponent,
    ForgetpasswordComponent,
    WishListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

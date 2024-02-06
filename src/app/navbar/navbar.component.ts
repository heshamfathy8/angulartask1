import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  constructor(){
    $(window).scroll(function () {
       
      if ($(window).scrollTop() != 0) {
        $('nav').removeClass('py-4')
        
      }else{
        $('nav').addClass('py-4')
      }
    })
  }
}

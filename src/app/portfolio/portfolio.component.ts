import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  constructor(){
    
      $(document).keyup(function (e) {
        if (e.key='Escape') {
          console.log('hesham');
          $('.model__').addClass('d-none')
          
        }
        $('.model__').find('img').blur(function () {
          $('.model__').addClass('d-none')
        })
      })
        
        
      
  }
  display(x:any){
    let y:any=$(x).find('img').attr('src');
    $('.model__').find('img').attr('src', y );
    $('.model__').removeClass('d-none')
    
  }
  
    
  }


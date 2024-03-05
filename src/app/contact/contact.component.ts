import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
labelup(x:any){
  if ($(x).val()) {
    $(x).prev().css('top','-17px')
  }else{
    $(x).prev().css('top','20px')
  }
}
}



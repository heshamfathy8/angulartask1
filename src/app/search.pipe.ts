import { Pipe, PipeTransform } from '@angular/core';
import { product } from './interface/product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products:product[],searchword:string): product[] {
    return products.filter(product=>product.title.toLowerCase().includes(searchword.toLowerCase()));
  }

}

import { Component } from "@angular/core";
import { mock_list_2 } from "./mock_list_2";
import { ProductItemModel } from "./product-item.model";

@Component({
    selector: 'kA-reverse',
    templateUrl: 'reverse-purchase-layout.component.html',
    styleUrls: ['reverse-purchase-layout.component.css']
})
export class ReverseViewComponent {
  // new info
  products: ProductItemModel [] = [];

  constructor(){
    for(var product of mock_list_2){
      console.log(product);
      this.products.push(product);
    }
  }
}
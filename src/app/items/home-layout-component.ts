import { Component } from "@angular/core";
import { mock_list } from "./mock-list";
import { ProductItemModel } from "./product-item.model";


@Component({
    selector: 'kA-home-layout',
    templateUrl: 'home-layout-component.html',
    styleUrls: ['home-layout-component.css']
})
export class HomeLayoutComponent{
    // new info
  products: ProductItemModel [] = [];

  constructor(){
    for(var product of mock_list){
      console.log(product);
      this.products.push(product);
    }
  }

}
import { Component } from "@angular/core";
import { mock_list } from "./mock-list";
import { ProductItemModel } from "./product-item.model";

@Component({
    selector: 'kA-list',
    templateUrl: 'list-view-layout.component.html',
    styleUrls: ['list-view-layout.component.css']
})
export class ListViewComponent {
  // new info
  products: ProductItemModel [] = [];

  constructor(){
    for(var product of mock_list){
      console.log(product);
      this.products.push(product);
    }
  }

  
}
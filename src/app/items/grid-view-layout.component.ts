import { Component } from "@angular/core";
import { mock_list } from "./mock-list";
import { ProductItemModel } from "./product-item.model";

@Component({
    selector: 'kA-grid',
    templateUrl: 'grid-view-layout.component.html',
    styleUrls: ['grid-view-layout.component.css']
})
export class GridViewComponent {
  // new info
  products: ProductItemModel [] = [];

  constructor(){
    for(var product of mock_list){
      console.log(product);
      this.products.push(product);
    }
  }
}
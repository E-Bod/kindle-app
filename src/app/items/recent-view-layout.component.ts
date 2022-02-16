import { Component } from "@angular/core";
import { mock_list } from "./mock-list";
import { ProductItemModel } from "./product-item.model";

@Component({
    selector: 'kA-recent',
    templateUrl: 'recent-view-layout.component.html',
    styleUrls: ['recent-view-layout.component.css']
})
export class RecentViewComponent {
  // new info
  products: ProductItemModel [] = [];

  constructor(){
    for(var product of mock_list){
      console.log(product);
      this.products.push(product);
    }
  }
}
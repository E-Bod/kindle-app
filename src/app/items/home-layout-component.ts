import { Component, OnInit } from "@angular/core";

import { ProductItemModel } from "./product-item.model";
import { ProductsService } from "./products.service";


@Component({
  selector: 'kA-home-layout',
  templateUrl: 'home-layout-component.html',
  styleUrls: ['home-layout-component.css']
})
export class HomeLayoutComponent implements OnInit {
  // new info
  products: ProductItemModel[] = [];

  constructor(private productsService: ProductsService) {

  }
  // constructor is always called before ngOnInit
  ngOnInit(): void {

    this.productsService.getProducts().subscribe((data: ProductItemModel[]) => {
      console.log("Fetch Data");
      console.log(data);
      for (var product of data) {
        
        this.products.push(product);
      }


    });
  }
}
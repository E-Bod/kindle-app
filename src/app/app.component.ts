import { Component } from '@angular/core';
import { mock_list } from './items/mock-list';
import { ProductItemModel } from './items/product-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kindle-app';

}

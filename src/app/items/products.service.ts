import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductItemModel } from "./product-item.model";

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    private baseUrl: string = "https://kindle-app-v2-default-rtdb.firebaseio.com/";
    private productsEndPoint: string = 'products.json';

    constructor(private http: HttpClient) {

    }
    public getProducts() {
        return this.http.get<ProductItemModel []>(this.baseUrl + this.productsEndPoint);
    }

    public getProduct(index: number) {
        return this.http.get<ProductItemModel>(this.baseUrl + 'products' + '/' + index + '.json');
    }

}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

//to register a service provider with the root module file
// @Injectable({
//     providedIn: 'root'
// })

@Injectable()
export class ProductService {
    private baseUrl = 'http://127.0.0.1:3003/products'

    constructor(private http: HttpClient) {

    }

    getProducts() {

    }
    getProductById(id: number) {

    }
    addProduct() {

    }
    updateProduct() {

    }
    deleteProduct() {

    }
}
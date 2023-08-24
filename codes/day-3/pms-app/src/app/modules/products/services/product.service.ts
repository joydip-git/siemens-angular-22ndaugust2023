import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { ApiResponse } from "src/app/models/apiresponse";
import { Product } from "src/app/models/product";

//to register a service provider with the root module file
// @Injectable({
//     providedIn: 'root'
// })

@Injectable()
export class ProductService {
    private baseUrl = 'http://127.0.0.1:3003/products'

    constructor(private http: HttpClient) {

    }

    getProducts(): Observable<ApiResponse<Product[]>> {
        return this.http.get<ApiResponse<Product[]>>(this.baseUrl)
    }
    getProductById(id: number): Observable<ApiResponse<Product>> {
        const obs: Observable<any> = this.http.get(`${this.baseUrl}/${id}`)
        const respObs: Observable<ApiResponse<Product>> = obs
            .pipe(
                map(
                    (resp: any) => {
                        const apiResp: ApiResponse<Product> = {
                            message: resp.message,
                            data: <Product>resp.data
                        }
                        return apiResp
                    }
                )
            )
        return respObs
    }
    addProduct(p: Product): Observable<ApiResponse<Product[]>> {
        return this.http.post<ApiResponse<Product[]>>(this.baseUrl, p)
    }
    updateProduct(p: Product, id: number): Observable<ApiResponse<Product[]>> {
        return this.http.put<ApiResponse<Product[]>>(`${this.baseUrl}/${id}`, p)
    }
    deleteProduct(id: number): Observable<ApiResponse<Product[]>> {
        return this.http.delete<ApiResponse<Product[]>>(`${this.baseUrl}/${id}`)
    }
}
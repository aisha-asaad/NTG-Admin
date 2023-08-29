import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getAllProducts() {
    return this.http.get('https://fakestoreapi.com/products')
  }

  getAllCategories() {
    return this.http.get('https://fakestoreapi.com/products/categories')
  }
  getProductsByCategory(keyword:string) {
    return this.http.get(`https://fakestoreapi.com/products/category/${keyword}`)
  }
  getDetails(id:any){
    return this.http.get('https://fakestoreapi.com/products/'+id)
  }
  getProductById(id:any){
    return this.http.get('https://fakestoreapi.com/products/'+id)

  }
  createProduct(model:any) {
    return this.http.get('https://fakestoreapi.com/products/',model)

  }
  updateProduct(model:any){
        return this.http.get('https://fakestoreapi.com/carts/',model)
  }
}
import { Injectable } from '@angular/core';
import { Product, Category, resultItem } from './product';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[];

  private listCategories = `https://pcsa57ebsj.execute-api.us-east-1.amazonaws.com/api/products/categories`;
  private searchProductUrl = `https://pcsa57ebsj.execute-api.us-east-1.amazonaws.com/api/products/search?query=`;

  constructor(private http: HttpClient) {}

  getProducts(query: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.searchProductUrl + query}`);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.listCategories);
  }

  setProducts(products: Product[]): void {
    this.products = products;
  }

  setQuery(query: string): void {}
}

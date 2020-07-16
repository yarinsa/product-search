import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category, Product, Fetcher } from './modal';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Fetch implements Fetcher {
  products: Product[];

  private listCategoriesEndpoint = `https://pcsa57ebsj.execute-api.us-east-1.amazonaws.com/api/products/categories`;
  private searchProductEndpoint = `https://pcsa57ebsj.execute-api.us-east-1.amazonaws.com/api/products/search?query=`;

  constructor(private connection: HttpClient) {}

  getProducts(query: string) {
    return this.connection.get<Product[]>(
      `${this.searchProductEndpoint + query}`
    );
  }

  getCategories(): Observable<Category[]> {
    return this.connection.get<Category[]>(this.listCategoriesEndpoint);
  }

  setProducts(products: Product[]): void {
    this.products = products;
  }
}

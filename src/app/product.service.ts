import { Injectable } from '@angular/core';
import { Product, Category, resultItem } from './product';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    {
      id: 2,
      title: 'Awesome Fresh Pizza',
      categoy: 'Games',
      categoryId: 0,
      price: 869.06,
      stock: 95,
      imageUrl: 'https://picsum.photos/400?image=507',
    },
    {
      id: 31,
      title: 'Ergonomic Soft Pizza',
      categoy: 'Kids',
      categoryId: 1,
      price: 108.65,
      stock: 30,
      imageUrl: 'https://picsum.photos/400?image=969',
    },
    {
      id: 76,
      title: 'Ergonomic Granite Pizza',
      categoy: 'Kids',
      categoryId: 1,
      price: 532.42,
      stock: 61,
      imageUrl: 'https://picsum.photos/400?image=59',
    },
  ];

  categories: Category[] = [
    {
      id: 2,
      products: 196,
      name: 'Toys',
    },
    {
      id: 3,
      products: 222,
      name: 'Computers',
    },
    {
      id: 0,
      products: 196,
      name: 'Games',
    },
    {
      id: 1,
      products: 196,
      name: 'Kids',
    },
    {
      id: 4,
      products: 190,
      name: 'Clothing',
    },
  ];

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

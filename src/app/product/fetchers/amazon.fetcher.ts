import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category, Product } from '../model';
import { ProductFetcher } from './fetcher';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AmazonProductFetcher implements ProductFetcher {
  private LIST_CATEGORIES_ENDPOINT = `https://pcsa57ebsj.execute-api.us-east-1.amazonaws.com/api/products/categories`;
  private SEARCH_PRODUCTS_ENDPOINT = `https://pcsa57ebsj.execute-api.us-east-1.amazonaws.com/api/products/search?query=`;

  constructor(private connection: HttpClient) {}

  getProducts = (query: string) => {
    return this.connection.get<Product[]>(
      `${this.SEARCH_PRODUCTS_ENDPOINT + query}`
    );
  };

  getCategories = (): Observable<Category[]> => {
    return this.connection.get<Category[]>(this.LIST_CATEGORIES_ENDPOINT);
  };
}

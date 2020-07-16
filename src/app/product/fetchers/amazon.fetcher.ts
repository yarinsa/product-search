import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category, Product } from '../model';
import { ProductFetcher } from './fetcher';
import { Injectable } from '@angular/core';
import { AMAZON_END_POINTS } from './config';

@Injectable({
  providedIn: 'root',
})
export class AmazonProductFetcher implements ProductFetcher {
  constructor(private connection: HttpClient) {}

  getProducts = (query: string) => {
    return this.connection.get<Product[]>(
      `${AMAZON_END_POINTS.products + query}`
    );
  };

  getCategories = (): Observable<Category[]> => {
    return this.connection.get<Category[]>(AMAZON_END_POINTS.listCategories);
  };
}

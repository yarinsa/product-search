import { Injectable } from '@angular/core';
import { Fetch } from './fetch';
import { HttpClient } from '@angular/common/http';
import { ResultItem } from './modal';
import { ProductFactory, availableFactories } from './factory/factory';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private results: ResultItem[] = [];

  constructor(private fetcher: Fetch) {}

  public getResults(query: string) {
    this.fetcher.getProducts(query).subscribe((products) => {
      this.results = [];
      return products.map((product) => {
        let category = Object.values(availableFactories).find(
          (category) => category === product.categoy
        );
        let factory = new ProductFactory(category);
        this.results.push(factory.handle(product));
      });
    });
    return new Observable<ResultItem[]>((subscriber) => {
      subscriber.next(this.results);
      subscriber.error('There was problem fetching from server');
      subscriber.complete();
    });
  }
}

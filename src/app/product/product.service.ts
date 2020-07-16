import { Injectable, Inject } from '@angular/core';
import { Fetch } from './fetch';
import { ResultItem } from './modal';
import { FactoryInjector, AbstractProductFactory } from './factory';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private results: ResultItem[] = [];

  constructor(
    private fetcher: Fetch,
    @Inject(FactoryInjector)
    private factory: (key: string) => AbstractProductFactory<any>
  ) {}

  public getResults(query: string) {
    this.fetcher.getProducts(query).subscribe((products) => {
      this.results = products.map((product) => {
        return this.factory(product.categoy).handle(product);
      });
    });

    return new Observable<ResultItem[]>((subscriber) => {
      subscriber.next(this.results);
      subscriber.error('There was problem fetching from server');
      subscriber.complete();
    });
  }
}

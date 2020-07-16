import { Injectable, Inject } from '@angular/core';
import { ResultItem } from './model';
import { Observable } from 'rxjs';
import { BuilderInjector, ProductResultItemBuilder } from './builders';
import { AmazonProductFetcher } from './fetchers';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private results: ResultItem[] = [];

  constructor(
    private fetcher: AmazonProductFetcher,
    @Inject(BuilderInjector)
    private factory: (key: string) => ProductResultItemBuilder
  ) {}

  public getResults = (query: string) => {
    this.fetcher.getProducts(query).subscribe((products) => {
      this.results = products.map((product) => {
        return this.factory(product.categoy).handle(product);
      });
    });

    return new Observable<ResultItem[]>((subscriber) => {
      subscriber.next(this.results);
      subscriber.complete();
    });
  };
}

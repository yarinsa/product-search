<<<<<<< HEAD
import { Injectable, Inject } from '@angular/core';
import { ResultItem } from './model';
import { Observable } from 'rxjs';
import { BuilderInjector, ProductResultItemBuilder } from './builders';
import { AmazonProductFetcher } from './fetchers';
=======
import { Injectable } from '@angular/core';
import { Fetch } from './fetch';
import { HttpClient } from '@angular/common/http';
import { ResultItem } from './modal';
import { ProductFactory, availableFactories } from './factory/factory';
import { Observable } from 'rxjs';
>>>>>>> d2d2d0feabb32ca2977b67aa11476d2cf0e81451

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private results: ResultItem[] = [];

<<<<<<< HEAD
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
=======
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
>>>>>>> d2d2d0feabb32ca2977b67aa11476d2cf0e81451
}

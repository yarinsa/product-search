import { ResultItem } from './model';
import { Observable } from 'rxjs';
import { ResultItemBuilder } from './builders';
import { AmazonProductFetcher } from './fetchers';
import { ipcMain } from 'electron';

export class ProductService {
  private static instance: ProductService;
  private fetcher = new AmazonProductFetcher();

  private constructor() {
    ipcMain.on('search-products', (event, arg) => {
      this.makeResult(arg[0]).subscribe(
        (result) => {
          event.reply('search-products-reply', result);
        },
        (error) => console.error(error)
      );
    });
  }

  makeResult = (query: string): Observable<ResultItem[]> => {
    return new Observable<ResultItem[]>((subscriber) => {
      try {
        let fetch = this.fetcher.getProducts(query);

        let produce = (products): ResultItem[] =>
          products.map((product) => {
            return new ResultItemBuilder(product.categoy).handle(product);
          });

        fetch.subscribe((products) => subscriber.next(produce(products)));
      } catch (error) {
        subscriber.error(error);
      }
    });
  };

  static getInstance(): ProductService {
    if (!ProductService.instance) {
      ProductService.instance = new ProductService();
    }

    return ProductService.instance;
  }
}

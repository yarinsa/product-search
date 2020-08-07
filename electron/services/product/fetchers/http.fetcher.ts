import { Observable, Subject } from 'rxjs';
import { Category, Product } from '../model';
import { ProductFetcher } from './fetcher';
import { AMAZON_END_POINTS } from './config';
import { HttpService } from '../../connectors/http.service';

export class HttpFetcher implements ProductFetcher {
  private static PRODUCTS_END_POINT = (query: string) =>
    `${AMAZON_END_POINTS.products}${query}`;
  private static LIST_CATEGORIES_END_POINT = AMAZON_END_POINTS.listCategories;

  connector = new HttpService();

  getProducts = (query: string) => {
    return new Promise<Product[]>((resolve, reject) => {
      this.connector
        .fetch(HttpFetcher.PRODUCTS_END_POINT(query))
        .then((results) => {
          resolve(results);
        })
        .catch((error) => reject(error));
    });
  };
}

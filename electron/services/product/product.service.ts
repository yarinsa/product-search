import { ResultItem } from './model';
import { Observable } from 'rxjs';
import { ResultItemBuilder } from './builders';
import { HttpFetcher } from './fetchers';
import { ipcMain } from 'electron';
import { HttpService } from '../connectors/http.service';
import { Connector } from '../connectors';

export class ProductService {
  private static instance: ProductService;
  private fetcher = new HttpFetcher();

  private constructor() {
    ipcMain.handle('search-products', async (event, arg) => {
      try {
        const results = await this.buildResults(arg);
        return results;
      } catch (error) {
        console.log(error);
        return [];
      }
    });
  }

  buildResults = (query: string): Promise<ResultItem[]> => {
    return new Promise<ResultItem[]>((resolve, reject) => {
      this.fetcher
        .getProducts(query)
        .then((products) => {
          return products.map((product) => {
            return new ResultItemBuilder(product.categoy).handle(product);
          });
        })
        .then((results) => resolve(results))
        .catch((error) => reject(error));
    });
  };

  static getInstance(): ProductService {
    if (!ProductService.instance) {
      ProductService.instance = new ProductService();
    }
    return ProductService.instance;
  }
}

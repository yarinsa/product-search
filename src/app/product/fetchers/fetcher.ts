import { Observable } from 'rxjs';
import { Product } from '../model';

export interface ProductFetcher {
  getProducts: (query: string) => Observable<Product[]>;
}

import { Observable, Subject } from 'rxjs';
import { Product } from '../model';
import { Connector } from '../../connectors';

export interface ProductFetcher {
  connector?: Connector;
  getProducts: (query: string) => Promise<Product[]>;
}

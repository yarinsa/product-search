import { Product, ResultItem } from '../model';

export interface ProductResultItemBuilder {
  handle: (product: Product) => ResultItem;
}

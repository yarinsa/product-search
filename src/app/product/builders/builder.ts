import { Product, ResultItem } from '../model';
export abstract class ProductResultItemBuilder {
  abstract handle(product: Product): ResultItem;
}

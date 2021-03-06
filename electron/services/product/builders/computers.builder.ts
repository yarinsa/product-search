import { ProductResultItemBuilder } from './builder';
import { ResultItem, Product } from '../model';

/**
 * Computers category handler
 * return result item when the tags
 * are the words combining the title.
 * @param product  - produce item from api
 */
export class ComputerResultItemBuilder implements ProductResultItemBuilder {
  handle = (product: Product): ResultItem => {
    return {
      imageUrl: product.imageUrl,
      title: product.title,
      tags: ['computer', ...product.title.split(' ')],
    };
  };
}

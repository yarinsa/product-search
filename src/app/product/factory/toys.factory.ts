import { AbstractProductFactory } from '../modal';

/**
 * Toys category handler
 * return result item when the tags are the price
 * @param product - produce item from api
 */
export class ToyFactory implements AbstractProductFactory {
  handle(product) {
    return {
      imageUrl: product.imageUrl,
      title: product.title,
      tags: ['toys', product.price],
    };
  }
}

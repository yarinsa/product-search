import { AbstractProductFactory } from '../modal';

/**
 * Computers category handler
 * return result item when the tags
 * are the words combining the title.
 * @param product  - produce item from api
 */
export class ComputerFactory implements AbstractProductFactory {
  handle(product) {
    return {
      imageUrl: product.imageUrl,
      title: product.title,
      tags: ['computer', product.title.split(' ')],
    };
  }
}

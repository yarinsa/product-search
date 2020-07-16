import { Injectable } from '@angular/core';
import { AbstractProductFactory } from '.';

/**
 * Computers category handler
 * return result item when the tags
 * are the words combining the title.
 * @param product  - produce item from api
 */
@Injectable()
export class ComputerFactory
  implements AbstractProductFactory<ComputerFactory> {
  handle(product) {
    return {
      imageUrl: product.imageUrl,
      title: product.title,
      tags: ['computer', product.title.split(' ')],
    };
  }
}

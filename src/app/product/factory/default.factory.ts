import { Injectable } from '@angular/core';
import { AbstractProductFactory } from '.';

/**
 * produces default result -
 * The result tags are the letters
 * combining the title reversed.
 * @param key Category name
 */
@Injectable()
export class DefaultFactory implements AbstractProductFactory<DefaultFactory> {
  handle(product) {
    return {
      imageUrl: product.imageUrl,
      title: product.title,
      tags: ['any', ...product.title.split('').reverse()],
    };
  }
}

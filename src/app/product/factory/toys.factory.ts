import { Injectable } from '@angular/core';
import { AbstractProductFactory } from '.';

/**
 * Toys category handler
 * return result item when the tags are the price
 * @param product - produce item from api
 */
@Injectable()
export class ToyFactory implements AbstractProductFactory<ToyFactory> {
  handle(product) {
    return {
      imageUrl: product.imageUrl,
      title: product.title,
      tags: ['toys', product.price],
    };
  }
}

import { Injectable } from '@angular/core';
import { ProductResultItemBuilder } from './builder';
import { Product, ResultItem } from '../model';

/**
 * Toys category handler
 * return result item when the tags are the price
 * @param product - produce item from api
 */
@Injectable()
export class ToyResultItemBuilder implements ProductResultItemBuilder {
  handle = (product: Product): ResultItem => {
    return {
      imageUrl: product.imageUrl,
      title: product.title,
      tags: ['toys', product.price.toString()],
    };
  };
}

import { Injectable } from '@angular/core';
import { ProductResultItemBuilder } from './builder';
import { Product, ResultItem } from '../model';
import { Register } from './register';

/**
 * produces default result -
 * The result tags are the letters
 * combining the title reversed.
 * @param key Category name
 */
@Injectable()
@Register('default')
export class DefaultResultItemBuilder implements ProductResultItemBuilder {
  handle = (product: Product): ResultItem => {
    return {
      imageUrl: product.imageUrl,
      title: product.title,
      tags: ['any', ...product.title.split('').reverse()],
    };
  };
}

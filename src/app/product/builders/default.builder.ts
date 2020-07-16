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
@Register('Default')
export class DefaultResultItemBuilder implements ProductResultItemBuilder {
  private static instance: DefaultResultItemBuilder;
  private constructor() {}

  public static getInstance(): DefaultResultItemBuilder {
    if (!DefaultResultItemBuilder.instance) {
      DefaultResultItemBuilder.instance = new DefaultResultItemBuilder();
    }

    return DefaultResultItemBuilder.instance;
  }
  handle = (product: Product): ResultItem => {
    return {
      imageUrl: product.imageUrl,
      title: product.title,
      tags: ['any', ...product.title.split('').reverse()],
    };
  };
}

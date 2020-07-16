import { Injectable } from '@angular/core';
import { ProductResultItemBuilder } from './builder';
import { ResultItem, Product } from '../model';
import { Register } from './register';

/**
 * Computers category handler
 * return result item when the tags
 * are the words combining the title.
 * @param product  - produce item from api
 */
@Injectable()
@Register('Computers')
export class ComputerResultItemBuilder implements ProductResultItemBuilder {
  private static instance: ComputerResultItemBuilder;
  private constructor() {}

  public static getInstance(): ComputerResultItemBuilder {
    if (!ComputerResultItemBuilder.instance) {
      ComputerResultItemBuilder.instance = new ComputerResultItemBuilder();
    }

    return ComputerResultItemBuilder.instance;
  }

  handle = (product: Product): ResultItem => {
    return {
      imageUrl: product.imageUrl,
      title: product.title,
      tags: ['computer', ...product.title.split(' ')],
    };
  };
}

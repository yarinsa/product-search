import { ProductResultItemBuilder } from './builder';
import { Product, ResultItem } from '../model';
import { ComputerResultItemBuilder } from './computers.builder';
import { ToyResultItemBuilder } from './toys.builder';

/**
 * produces default result -
 * The result tags are the letters
 * combining the title reversed.
 * @param key Category name
 */
export class ResultItemBuilder implements ProductResultItemBuilder {
  constructor(category: string) {
    return availableResultItemBuilders[category]
      ? availableResultItemBuilders[category]
      : this;
  }

  handle = (product: Product): ResultItem => {
    return {
      imageUrl: product.imageUrl,
      title: product.title,
      tags: ['any', ...product.title.split('').reverse()],
    };
  };
}

export const availableResultItemBuilders: Record<
  string,
  ProductResultItemBuilder
> = {
  Toys: new ToyResultItemBuilder(),
  Computers: new ComputerResultItemBuilder(),
};

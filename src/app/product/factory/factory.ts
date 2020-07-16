import { AbstractProductFactory, Product } from '../modal';
import { ComputerFactory } from './computers.factory';
import { ToyFactory } from './toys.factory';

export enum availableFactories {
  Toys = 'Toys',
  Computers = 'Computers',
}

/**
 * Main Factory returns a new Instance of
 * Product factory according to product category.
 * If Product factory isn't exist for this category
 * produces default result -
 * The result tags are the letters
 * combining the title reversed.
 * @param key Category name
 */
export class ProductFactory implements AbstractProductFactory {
  constructor(key: availableFactories) {
    switch (key) {
      case availableFactories.Toys:
        return new ToyFactory();
        break;

      case availableFactories.Computers:
        return new ComputerFactory();
        break;
    }
  }

  handle(product) {
    return {
      imageUrl: product.imageUrl,
      title: product.title,
      tags: ['any', ...product.title.split('').reverse()],
    };
  }
}

//TODO: Try implanting Record object.
// const categoriesMap: Record<Category, AbstractProductFactory> = [
//   { Computers: new ComputerFactory(), Toys: new ToyFactory() },
// ];

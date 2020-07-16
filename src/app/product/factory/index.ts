import { Product, ResultItem } from '../modal';
import { ComputerFactory } from './computers.factory';
import { ToyFactory } from './toys.factory';
import { InjectionToken } from '@angular/core';
import { DefaultFactory } from './default.factory';

/**
 * Defines product handler (factory) interface
 */
export abstract class AbstractProductFactory<T> {
  abstract handle(product: Product): ResultItem;
}

export const FactoryInjector = new InjectionToken<any>('Product Factory', {
  providedIn: 'root',
  factory: () => ProductFactory,
});

function ProductFactory(key: string): AbstractProductFactory<any> {
  return availableFactories[key]
    ? availableFactories[key]
    : new DefaultFactory();
}

const availableFactories: Record<string, AbstractProductFactory<any>> = {
  Computers: new ComputerFactory(),
  Toys: new ToyFactory(),
};

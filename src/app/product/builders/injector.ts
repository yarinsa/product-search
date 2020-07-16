import { ComputerResultItemBuilder } from './computers.builder';
import { ToyResultItemBuilder } from './toys.builder';
import { DefaultResultItemBuilder } from './default.builder';
import { ProductResultItemBuilder } from './builder';
import { InjectionToken } from '@angular/core';

export const BuilderInjector = new InjectionToken<any>('ProductBuilder', {
  providedIn: 'root',
  factory: () => ResultItemBuilderFactory,
});

export const ResultItemBuilderFactory = (
  category: string
): ProductResultItemBuilder => {
  return availableResultItemBuilders[category]
    ? availableResultItemBuilders[category]
    : new DefaultResultItemBuilder();
};

const availableResultItemBuilders: Record<string, ProductResultItemBuilder> = {
  Computers: new ComputerResultItemBuilder(),
  Toys: new ToyResultItemBuilder(),
};

import { ComputerResultItemBuilder } from './computers.builder';
import { ToyResultItemBuilder } from './toys.builder';
import { DefaultResultItemBuilder } from './default.builder';
import { ProductResultItemBuilder } from './builder';
import { InjectionToken } from '@angular/core';
import { availableResultItemBuilders } from './register';

export const Builder = new InjectionToken<any>('ProductBuilder', {
  providedIn: 'root',
  factory: () => ResultItemBuilderFactory,
});

//To discuss: Find a better way of creating map before class initialization
const initializeBuilders = () => {
  new DefaultResultItemBuilder();
  new ToyResultItemBuilder();
  new ComputerResultItemBuilder();
  new DefaultResultItemBuilder();
};

initializeBuilders();

export const ResultItemBuilderFactory = (
  category: string
): ProductResultItemBuilder => {
  return availableResultItemBuilders[category]
    ? availableResultItemBuilders[category]
    : availableResultItemBuilders.default;
};

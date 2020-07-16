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

export const ResultItemBuilderFactory = (
  category: string
): ProductResultItemBuilder => {
  initializeBuilders();
  console.log(availableResultItemBuilders);
  return availableResultItemBuilders[category]
    ? availableResultItemBuilders[category]
    : DefaultResultItemBuilder.getInstance();
};

const initializeBuilders = () => {
  ToyResultItemBuilder.getInstance();
  ComputerResultItemBuilder.getInstance();
  DefaultResultItemBuilder.getInstance();
};

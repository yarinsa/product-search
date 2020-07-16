import { ProductResultItemBuilder } from './builder';
import { ToyResultItemBuilder } from './toys.builder';

export const Register = (category: string) => {
  return function (target) {
    availableResultItemBuilders[category] = new target();
  };
};

export const availableResultItemBuilders: Record<
  string,
  ProductResultItemBuilder
> = {};

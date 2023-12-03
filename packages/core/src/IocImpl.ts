import { container } from './container';

export const IocImpl = (tag: string): ClassDecorator => {
  return (target) => {
    console.log('impl:', tag);
    container.set(tag, target);
  };
};
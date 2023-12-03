import { container } from './container';

export const build = (tag: string, option?: any) => {
  const TheClass = container.get(tag);
  if (!TheClass) {
    console.error(tag, 'is not implemented.');
  }
  else {
    new TheClass(option);
  }
};
import { IocImpl } from '@iife-ioc-test/core';

@IocImpl('example')
export class Example {
  constructor(options: any) {
    console.log(options);
  }
}

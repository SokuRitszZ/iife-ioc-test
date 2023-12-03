import * as core from '@iife-ioc-test/core';
import { build } from '@iife-ioc-test/core';

Object.assign(window, {
  core,
});

document.getElementById('root')?.addEventListener('click', () => {
  build('example', {});
  if (!document.querySelector('script#example')) {
    const scriptDom = document.createElement('script');
    Object.assign(scriptDom, {
      type: 'module',
      src: './example.js',
      id: 'example',
    });
    document.body.append(scriptDom);
    scriptDom.addEventListener('load', () => {
      build('example', {});
    });
  }
});

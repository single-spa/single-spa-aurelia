import Aurelia, { JitHtmlBrowserConfiguration } from 'aurelia';
import singleSpaAurelia from 'single-spa-aurelia';

import { BlogApp } from './blog-app';

const lifecycles = singleSpaAurelia({
  Aurelia,
  JitHtmlBrowserConfiguration,
  component: BlogApp,
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;

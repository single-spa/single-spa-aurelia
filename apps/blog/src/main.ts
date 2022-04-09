import Aurelia, { LoggerConfiguration, ConsoleSink, LogLevel, RouterConfiguration } from 'aurelia';
import { Router } from '@aurelia/router-lite'
import { singleSpaAurelia } from 'single-spa-aurelia';

import { BlogRootCustomElement } from './blog-root';

const lifecycles = singleSpaAurelia({
  template: '<blog-root />',
  component: BlogRootCustomElement,
  getAurelia: () => {
    const aurelia = new Aurelia();
    aurelia.register(
      LoggerConfiguration.create({
        level: LogLevel.debug,
        sinks: [ConsoleSink],
      }),
      RouterConfiguration.customize({ useUrlFragmentHash: false }),
    );
    return aurelia;
  },
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;

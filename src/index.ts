import { LifeCycles } from 'single-spa';

import { createContainerAndGetHost } from './dom';
import { SingleSpaAureliaOptions, BootstrappedSingleSpaAureliaOptions } from './types';

const defaultOptions: BootstrappedSingleSpaAureliaOptions = {
  // Required options that will be set by the library consumer.
  component: null,
  aurelia: null!,
  getAurelia: null!,
  template: null!,
  // Optional options.
  domElementGetter: undefined, // only optional if you provide a domElementGetter as a custom prop
};

function bootstrap(): Promise<void> {
  return Promise.resolve();
}

function mount(options: BootstrappedSingleSpaAureliaOptions, props: any): Promise<void> {
  const host = createContainerAndGetHost(options, props);

  const aurelia = options.getAurelia(props);
  options.aurelia = aurelia;

  return Promise.resolve(
    aurelia
      .app({
        host,
        component: options.component,
      })
      .start(),
  );
}

async function unmount(options: BootstrappedSingleSpaAureliaOptions): Promise<void> {
  await options.aurelia?.stop(true);
  options.aurelia = null;
}

export function singleSpaAurelia(userOptions: SingleSpaAureliaOptions): LifeCycles {
  if (typeof userOptions !== 'object') {
    throw Error('single-spa-aurelia requires a configuration object');
  }

  const options: BootstrappedSingleSpaAureliaOptions = {
    ...defaultOptions,
    ...userOptions,
  };

  if (typeof options.getAurelia !== 'function') {
    throw new Error('single-spa-aurelia should be passed an options.Aurelia class');
  }

  if (typeof options.component !== 'function') {
    throw new Error('single-spa-aurelia should be passed an options.component class');
  }

  return {
    bootstrap,
    mount: mount.bind(null, options),
    unmount: unmount.bind(null, options),
  };
}

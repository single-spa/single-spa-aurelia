import { LifeCycles } from 'single-spa';

import { chooseDomElementGetter, getHost } from './dom';
import { SingleSpaAureliaOptions, BootstrappedSingleSpaAureliaOptions } from './types';

const defaultOptions: BootstrappedSingleSpaAureliaOptions = {
  component: null,
  aurelia: null!,
  Aurelia: null!,
  JitHtmlBrowserConfiguration: null!,
  domElementGetter: undefined,
};

function bootstrap(): Promise<void> {
  return Promise.resolve();
}

function mount(options: BootstrappedSingleSpaAureliaOptions, props: any): Promise<unknown> {
  const domElementGetter = chooseDomElementGetter(options, props);

  if (typeof domElementGetter !== 'function') {
    throw new Error(`
      single-spa-aurelia: Cannot mount Aurelia application '${
        props.name || props.appName
      }' without a domElementGetter provided either as an option or prop
    `);
  }

  const host = getHost(domElementGetter);

  const aurelia = new options.Aurelia(options.container).register(
    options.JitHtmlBrowserConfiguration,
  );

  options.aurelia = aurelia;

  return aurelia
    .app({
      host,
      component: options.component,
    })
    .start()
    .wait()
    .then(() => {
      // That passes `props` binding to the root component in case
      // it has a `@bindable props` property.
      (aurelia.root.viewModel as { props: unknown }).props = props;
    });
}

function unmount(options: BootstrappedSingleSpaAureliaOptions): Promise<void> {
  return options
    .aurelia!.stop()
    .wait()
    .then(() => {
      options.aurelia = null;
    });
}

export default function singleSpaAurelia(userOptions: SingleSpaAureliaOptions): LifeCycles {
  if (typeof userOptions !== 'object') {
    throw Error('single-spa-aurelia requires a configuration object');
  }

  const options: BootstrappedSingleSpaAureliaOptions = {
    ...defaultOptions,
    ...userOptions,
  };

  if (typeof options.Aurelia !== 'function') {
    throw new Error('single-spa-aurelia should be passed an options.Aurelia class');
  }

  if (typeof options.JitHtmlBrowserConfiguration !== 'object') {
    throw new Error(
      'single-spa-aurelia should be passed an options.JitHtmlBrowserConfiguration object',
    );
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

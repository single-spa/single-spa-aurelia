import { DomElementGetter, SingleSpaAureliaOptions } from './types';

export function getHost(domElementGetter: DomElementGetter): never | HTMLElement {
  const host: HTMLElement = domElementGetter();

  if (host) {
    return host;
  }

  throw new Error('single-spa-aurelia: domElementGetter did not return a valid DOM element');
}

export function chooseDomElementGetter(
  options: SingleSpaAureliaOptions,
  props: any,
): DomElementGetter {
  props = props?.customProps ?? props;

  if (props.domElement) {
    return () => props.domElement;
  } else if (props.domElementGetter) {
    return props.domElementGetter;
  } else if (options.domElementGetter) {
    return options.domElementGetter;
  } else {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return defaultDomElementGetter(props.name);
  }
}

function defaultDomElementGetter(name: string): DomElementGetter {
  return function getDefaultDomElement(): HTMLElement {
    const id = `single-spa-application:${name}`;
    let domElement: HTMLElement | null = document.getElementById(id);

    if (!domElement) {
      domElement = document.createElement('div');
      domElement.id = id;
      document.body.appendChild(domElement);
    }

    return domElement;
  };
}

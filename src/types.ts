import type Aurelia from 'aurelia';

export type DomElementGetter = (props: any) => HTMLElement;

export interface SingleSpaAureliaOptions {
  template: string;
  component: unknown;
  getAurelia: (props: any) => Aurelia;
  domElementGetter?: DomElementGetter;
}

export interface BootstrappedSingleSpaAureliaOptions extends SingleSpaAureliaOptions {
  aurelia: Aurelia | null;
}

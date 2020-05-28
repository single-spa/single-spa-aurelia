import Aurelia, { IContainer, JitHtmlBrowserConfiguration } from 'aurelia';

export type DomElementGetter = () => HTMLElement;

export interface SingleSpaAureliaOptions {
  // `component` should reference root component class, for instance `component: MyApp`.
  component: unknown;
  // Custom DI container that can be created via `DI.createContainer()` and
  // passed custom dependencies (singleton classes, etc.).
  container?: IContainer;
  Aurelia: typeof Aurelia;
  JitHtmlBrowserConfiguration: typeof JitHtmlBrowserConfiguration;
  domElementGetter?(): HTMLElement;
}

export interface BootstrappedSingleSpaAureliaOptions extends SingleSpaAureliaOptions {
  aurelia: Aurelia | null;
}

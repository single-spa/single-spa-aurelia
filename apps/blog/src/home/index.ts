import template from './index.html';

import { customElement } from 'aurelia';

@customElement({ name: 'home-view', template })
export class HomeViewCustomElement {
  message = 'This is blog app!';
}

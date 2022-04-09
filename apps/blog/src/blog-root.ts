import template from './blog-root.html';

import { customElement, route } from 'aurelia';

@route({
  routes: [
    { id: 'home', path: '', component: import('./home'), title: 'Home' },
    // { id: 'home', path: '', component: import('./home'), title: 'Home' },
    // { path: 'login', component: import('./auth'), title: 'Sign in' },
    // { path: 'register', component: import('./auth'), title: 'Sign up' },
    // { path: 'settings', component: import('./settings'), title: 'Settings' },
    // { id: 'profile', path: 'profile/:name', component: import('./profile'), title: 'Profile' },
    // { id: 'editor', path: 'editor/:slug?', component: import('./editor'), title: 'Editor' },
    // { id: 'article', path: 'article/:slug', component: import('./article'), title: 'Article' },
  ],
})
@customElement({ name: 'blog-root', template })
export class BlogRootCustomElement {
}

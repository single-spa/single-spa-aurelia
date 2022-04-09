System.import('single-spa').then(({ registerApplication, start }) => {
  // registerApplication({
  //   name: 'navbar',
  //   app: () => System.import('navbar'),
  //   activeWhen: () => true,
  // });

  registerApplication({
    name: 'blog',
    app: () => System.import('blog'),
    activeWhen: location => location.pathname.startsWith('/blog'),
  });

  start();
});

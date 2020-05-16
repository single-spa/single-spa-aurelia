/**
 * @type {import('@jest/types/build').Config.DefaultOptions}
 */
module.exports = {
  displayName: 'single-spa-aurelia',
  preset: 'ts-jest',
  testEnvironment: 'node',
  cacheDirectory: '<rootDir>/.cache',
  bail: true,
  clearMocks: true,
  resetModules: true,
};

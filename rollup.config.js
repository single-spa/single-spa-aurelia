import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

const umdConfig = {
  input: 'src/index.ts',
  output: {
    dir: 'dist/umd',
    format: 'umd',
    sourcemap: true,
    name: 'singleSpaAurelia',
  },
  external: ['aurelia-bootstrapper'],
  plugins: [
    resolve(),
    typescript({
      rootDir: 'src',
      declaration: true,
      declarationDir: 'dist/umd',
    }),
  ],
};

const esmConfig = {
  input: 'src/index.ts',
  output: {
    dir: 'dist/es2015',
    format: 'esm',
    sourcemap: true,
  },
  external: ['aurelia-bootstrapper'],
  plugins: [
    resolve(),
    typescript({
      rootDir: 'src',
      declaration: true,
      declarationDir: 'dist/es2015',
    }),
  ],
};

export default [umdConfig, esmConfig];

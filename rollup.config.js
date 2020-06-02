import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

import packageJson from './package.json';

export default [
  {
    input: 'src/index.ts',
    output: {
      file: packageJson.main,
      format: 'umd',
      sourcemap: true,
      name: 'singleSpaAurelia',
    },
    plugins: [
      resolve(),
      typescript({
        useTsconfigDeclarationDir: true,
        tsconfigOverride: {
          compilerOptions: {
            target: 'ES5',
          },
        },
      }),
    ],
  },
  {
    input: 'src/index.ts',
    output: {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
    plugins: [
      resolve(),
      typescript({
        useTsconfigDeclarationDir: true,
        tsconfigOverride: {
          compilerOptions: {
            target: 'ES2015',
          },
        },
      }),
    ],
  },
];

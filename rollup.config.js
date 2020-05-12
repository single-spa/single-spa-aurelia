import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

import packageJson from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'umd',
      sourcemap: true,
      name: 'singleSpaAurelia',
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    typescript({ useTsconfigDeclarationDir: true }),
  ],
};

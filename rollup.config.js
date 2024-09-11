// rollup.config.js
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  plugins: [typescript(), terser()],
  output: [
    {
      file: 'dist/index.mjs',
      format: 'esm',
    },
    {
      file: 'dist/index.js',
      format: 'cjs',
    },
  ]
};
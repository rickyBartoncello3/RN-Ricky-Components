import {dirname} from 'path';
import {fileURLToPath} from 'url';
import {defineConfig} from 'eslint/config';

import globals from 'globals';
const {jest} = globals;
import pkg from '@eslint/js';
const {configs} = pkg;

import {FlatCompat} from '@eslint/eslintrc';

const __dirname = dirname(fileURLToPath(import.meta.url));

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: configs.recommended,
  allConfig: configs.all,
});

export default defineConfig([
  {
    ignores: [
      '.eslintrc.js',
      '.prettierrc.js',
      'eslint.r.config.js',
      'metro.r.config.js',
    ],
  },
  ...compat.extends('@react-native').map(({root: _root, ...cfg}) => cfg),
  {
    languageOptions: {
      globals: {
        ...jest,
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
]);

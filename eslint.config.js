import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  { files: ['**/*.vue'], languageOptions: { parserOptions: { parser: tseslint.parser } } },
  {
    plugins: ['prettier'],
    rules: {
      'prettier/prettier': 'error',
    },
  },
  {
    rules: {
      'no-unused-vars': 'warn',
      semi: ['warn', 'always'],
      'no-console': 'warn',
      'max-len': [
        'warn',
        {
          code: 100,
          ignoreUrls: true,
          ignoreStrings: true,
          // 自动换行
          ignoreComments: true,
        },
      ],
      indent: ['error', 2],
      // 'comma-dangle': ['error', 'always-multiline'],
      quotes: ['error', 'single'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'comma-spacing': ['error', { before: false, after: true }],
      // 不禁用any
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];

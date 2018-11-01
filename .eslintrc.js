const path = require('path');

module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'prettier',
  ],
  parser: 'babel-eslint',
  rules: {
    'no-param-reassign': ['error', { 'props': false }],
    'object-curly-newline': ['error', { 'consistent': true }],
    'react/prop-types': 'error',
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'arrow-body-style': 'warn',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'error', { 'devDependencies': true },
    ],
    'linebreak-style': 'off',
    'lines-between-class-members': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['.']
      },
    },
  },
};
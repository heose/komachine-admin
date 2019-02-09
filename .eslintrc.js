const path = require('path');

module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['airbnb', 'prettier'],
  parser: 'babel-eslint',
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-param-reassign': ['error', { props: false }],
    'object-curly-newline': ['error', { consistent: true }],
    'react/prop-types': 'error',
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/destructuring-assignment': 'off',
    'react/prop-types': ['error', { skipUndeclared: true }],
    'arrow-body-style': ['warn', 'as-needed'],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'linebreak-style': 'off',
    'lines-between-class-members': 'off',
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
};

module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    'components/(.*)': '<rootDir>/components/$1',
    '@lib/(.*)': '<rootDir>/lib/$1',
  },
  collectCoverage: true,
  transform: {
    '^.+\\.js?$': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!lodash-es)'],
};

module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/$1',
  },
  collectCoverage: true,
  transform: {
    '^.+\\.js?$': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!lodash-es)'],
};

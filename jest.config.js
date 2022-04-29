/* eslint-disable @typescript-eslint/no-var-requires */
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  testRegex: '/src/.*\\.(test|spec).(ts|tsx|js)$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,tsx,ts}',
    '!**/node_modules/**',
    '!src/**/*.module.{js,jsx,tsx,ts}',
    '!src/**/*.spec.{js,jsx,tsx,ts}',
    '!src/**/*.test.{js,jsx,tsx,ts}',
    '!src/migrations/*.{js,jsx,tsx,ts}',
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
};

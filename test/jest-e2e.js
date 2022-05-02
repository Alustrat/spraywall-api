/* eslint-disable @typescript-eslint/no-var-requires */
const baseConfig = require('../jest.config');

module.exports = {
  ...baseConfig,
  rootDir: '..',
  testRegex: 'test/.*\\.e2e-spec.(ts|tsx|js)$',
};

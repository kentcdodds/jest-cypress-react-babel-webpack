const path = require('path')

module.exports = {
  ...require('../test/jest-common'),
  displayName: 'backend',
  testEnvironment: 'jest-environment-node',
  testMatch: ['**/__tests__/**/*.js'],
  rootDir: path.join(__dirname, 'src'),
  moduleDirectories: ['node_modules', path.join(__dirname, 'src'), 'shared'],
}

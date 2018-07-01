const path = require('path')

module.exports = {
  ...require('./jest-common'),
  coverageDirectory: path.join(__dirname, '../coverage/server'),
  testEnvironment: 'jest-environment-node',
  testMatch: ['**/__server_tests__/**/*.js'],
}

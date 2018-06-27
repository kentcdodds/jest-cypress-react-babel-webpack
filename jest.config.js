module.exports = {
  ...require('./other/jest-common.js'),
  collectCoverageFrom: ['**/src/**/*.js'],
  coverageThreshold: {
    global: {
      statements: 17,
      branches: 4,
      functions: 20,
      lines: 17,
    },
    './src/utils.js': {
      statements: 100,
      branches: 80,
      functions: 100,
      lines: 100,
    },
  },
  projects: [
    './other/jest.lint.js',
    './other/jest.client.js',
    './other/jest.server.js',
  ],
}

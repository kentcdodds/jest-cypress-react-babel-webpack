module.exports = {
  ...require('./other/jest-common.js'),
  collectCoverageFrom: ['**/src/**/*.js'],
  coverageThreshold: {
    global: {
      statements: 17,
      branches: 8,
      functions: 20,
      lines: 17,
    },
  },
  projects: [
    './other/jest.lint.js',
    './other/jest.client.js',
    './other/jest.server.js',
  ],
}

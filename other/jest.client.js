module.exports = {
  ...require('./jest-common'),
  displayName: 'dom',
  testEnvironment: 'jest-environment-jsdom',
  setupTestFrameworkScriptFile: require.resolve(
    '../test/setup-test-framework.js',
  ),
}

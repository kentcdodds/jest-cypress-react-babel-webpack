module.exports = {
  ...require('./jest-common'),
  displayName: 'dom',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: [
    'jest-dom/extend-expect',
    'react-testing-library/cleanup-after-each',
  ],
  snapshotSerializers: ['jest-emotion'],
}

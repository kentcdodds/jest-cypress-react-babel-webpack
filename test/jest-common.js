// common project configuration used by the other configs

const path = require('path')

module.exports = {
  rootDir: path.join(__dirname, '..'),
  moduleFileExtensions: ['js', 'json', 'jsx', 'node', 'css'],
  moduleDirectories: ['node_modules', path.join(__dirname, 'src'), 'shared'],
  moduleNameMapper: {
    // module must come first
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./style-mock.js'),
    // can also map files that are loaded by webpack with the file-loader
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/__tests__/',
    '__server_tests__/',
  ],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
    'jest-watch-select-projects',
  ],
}

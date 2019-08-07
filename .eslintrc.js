const path = require('path')

module.exports = {
  extends: [
    'kentcdodds',
    'kentcdodds/import',
    'kentcdodds/jest',
    'kentcdodds/react',
  ],
  rules: {
    // https://github.com/benmosher/eslint-plugin-import/issues/1446
    'import/named': 'off',
  },
  settings: {'import/resolver': 'node'},
  overrides: [
    {
      files: ['**/src/**'],
      settings: {'import/resolver': 'webpack'},
    },
    {
      files: ['**/__tests__/**'],
      settings: {
        'import/resolver': {
          jest: {
            jestConfigFile: path.join(__dirname, './test/jest-common.js'),
          },
        },
      },
    },
  ],
}

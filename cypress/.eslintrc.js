module.exports = {
  root: true,
  plugins: ['eslint-plugin-cypress'],
  env: {'cypress/globals': true},
  rules: {
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/assertion-before-screenshot': 'warn',
  },
}

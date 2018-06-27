module.exports = {
  linters: {
    '**/*.js': ['jest --findRelatedTests', 'prettier', 'git add'],
  },
}

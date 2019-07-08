module.exports = {
  '**/*.+(js|json|less|css|ts|tsx|md)': [
    'prettier',
    'jest --findRelatedTests',
    'git add',
  ],
}

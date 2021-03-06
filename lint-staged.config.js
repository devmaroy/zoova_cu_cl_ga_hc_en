module.exports = {
  '**/*.+(js|jsx|md|yml|yaml)': [
    './node_modules/.bin/eslint --fix',
    './node_modules/.bin/prettier --write',
    'git add',
  ],
  '**/*.+(css|scss)': [
    './node_modules/.bin/stylelint *.css --fix',
    './node_modules/.bin/prettier --write',
    'git add',
  ],
};

module.exports = {
  '**/*.{js,ts,tsx}': (filenames) =>
    `lerna exec -- eslint ${filenames.join(' ')}`,
}

const Configuration = {
  /*
   * Resolve and load @commitlint/config-conventional from node_modules.
   * Referenced packages must be installed
   */
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'perf',
        'refactor',
        'build',
        'test',
        'ci',
        'chore',
        'docs',
        'revert',
        'style',
      ],
    ],
    'body-max-length': [1, 'always', 200],
    'body-max-line-length': [1, 'always', 200],
    'header-max-length': [1, 'always', 100],
  },

  /*
   * Custom URL to show upon failure
   */
  helpUrl:
    'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
}

module.exports = Configuration

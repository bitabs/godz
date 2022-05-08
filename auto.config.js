/** NPM configuration */
const npmOptions = {
  legacyAuth: true,
  setRcToken: false,
  exact: true,
};

/** All Contributors configuration */
const allContributorsOptions = {
  types: {
    plugin: '**/plugin/**/*',
    code: ['**/src/**/*', '**/package.json', '**/tsconfig.json'],
  },
  exclude: ['dependabot', 'ci-services'],
};

/** Auto configuration */
module.exports = {
  prereleaseBranches: ['alpha', 'beta', 'rc'],
  plugins: [
    ['npm', npmOptions],
    'released',
    ['all-contributors', allContributorsOptions],
  ],
};

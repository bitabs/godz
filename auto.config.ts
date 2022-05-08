import type { IAllContributorsPluginOptions } from '@auto-it/all-contributors'
import type { INpmConfig } from '@auto-it/npm'
import type { AutoRc } from 'auto'

/** NPM configuration */
const npmOptions: INpmConfig = {
  legacyAuth: true,
  setRcToken: false,
  exact: true,
}

/** All Contributors configuration */
const allContributorsOptions: IAllContributorsPluginOptions = {
  types: {
    plugin: '**/plugin/**/*',
    code: ['**/src/**/*', '**/package.json', '**/tsconfig.json'],
  },
  exclude: ['dependabot', 'ci-services'],
}

/** Auto configuration */
export default function rc(): AutoRc {
  return {
    prereleaseBranches: ['alpha'],
    plugins: [
      ['./build/auto/npm/npm.js', npmOptions],
      // ['npm', npmOptions],
      'released',
      ['all-contributors', allContributorsOptions],
    ],
  }
}

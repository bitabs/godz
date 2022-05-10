const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const path = require('path')
const rootMain = require('../../../.storybook/main')

module.exports = {
  ...rootMain,

  core: { ...rootMain.core, builder: 'webpack5' },

  stories: [
    ...rootMain.stories,
    '../src/components/**/*.stories.mdx',
    '../src/components/**/*.stories.*@(js|jsx|ts|tsx)',
  ],
  addons: [...rootMain.addons, '@nrwl/react/plugins/storybook'],
  webpackFinal: async (config, { configType }) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType })
    }

    const tsPaths = new TsconfigPathsPlugin({
      configFile: path.resolve(__dirname, '../../godz-base/tsconfig.json'),
    })

    config.resolve.plugins
      ? config.resolve.plugins.push(tsPaths)
      : (config.resolve.plugins = [tsPaths])

    // add your own webpack tweaks if needed

    return config
  },
}

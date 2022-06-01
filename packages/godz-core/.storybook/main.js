const { addons } = require('@storybook/addons')
const { default: Dark } = require('./theme/storybook.theme.dark')
const rootMain = require('../../../.storybook/main')

addons.setConfig({
  theme: Dark,
})

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

    config.resolve.alias = {
      ...config.resolve.alias,
      '@godz-base': 'packages/godz-base/src',
    }

    // add your own webpack tweaks if needed

    return config
  },
}

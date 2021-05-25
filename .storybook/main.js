const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-essentials'],
  webpackFinal: (config) => {

    config.resolve.alias = {
      '@/*': path.resolve(__dirname, '..', 'src/*'),
      ...config.resolve.alias
    }


    return config
  }
}

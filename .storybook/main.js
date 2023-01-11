const path = require('path')

module.exports = {
  stories: [
    '../src/components/**/stories.@(js|jsx|ts|tsx)',
    '../src/templates/**/stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-addon-designs'],
  webpackFinal: async (config, {}) => {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test.test('.svg'))
    fileLoaderRule.exclude = path.resolve(__dirname, '../src/components/Icon')
    config.module.rules.push({
      test: /\.svg$/,
      include: path.resolve(__dirname, '../src/components/Icon'),
      use: [
        {
          loader: 'svg-sprite-loader',
          options: {
            symbolId: 'icon_[name]',
          },
        },
        {
          loader: 'svgo-loader',
          options: {
            plugins: ['removeTitle', 'cleanupIDs', 'removeStyleElement'],
          },
        },
      ],
    })
    return config
  },
  babel: async (options) => ({
    ...options,
    plugins: [
      [
        'babel-plugin-styled-components',
        {
          displayName: true,
        },
      ],
    ],
  }),
}

const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
module.exports = {
  stories: [
    '../libs/react/guides/**/*.stories.mdx',
    '../libs/react/**/*.stories.mdx',
    '../libs/react/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
    '@geometricpanda/storybook-addon-badges',
    '@storybook/addon-storysource',
    '@storybook/addon-coverage',
    '@storybook/addon-mdx-gfm',
  ],
  features: {
    interactionsDebugger: true, // 👈 Enable playback controls
  },

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    })
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ]

    // Return the altered config
    return config
  },
  docs: {
    autodocs: true,
  },
}

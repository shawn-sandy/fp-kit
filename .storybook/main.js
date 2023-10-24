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
    '@chromaui/addon-visual-tests',
  ],
  features: {
    interactionsDebugger: true, // 👈 Enable playback controls
  },

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: true,
    defaultName: 'Interactive Guide',
  },
}

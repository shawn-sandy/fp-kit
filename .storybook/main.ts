import { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    // '../libs/react/guides/**/*.stories.mdx',
    // '../libs/react/fpkit/**/*.stories.mdx',
    '../libs/react/fpkit/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
    // '@storybook/addon-actions',
    // '@geometricpanda/storybook-addon-badges',
    '@storybook/addon-coverage',
    // 'storybook-addon-performance',
    '@chromaui/addon-visual-tests',
    '@chromatic-com/storybook'
  ],

  // features: {
  //   interactionsDebugger: true, // 👈 Enable playback controls
  // },

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  docs: {
    defaultName: 'Interactive Guide'
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  },
  core: {
    builder: '@storybook/builder-vite', // 👈 The builder enabled here.
  },
}

export default config;

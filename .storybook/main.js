module.exports = {
  "stories": [
    "../libs/react/guides/**/*.stories.mdx",
    "../libs/react/**/*.stories.mdx",
    "../libs/react/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-interactions",
    "@geometricpanda/storybook-addon-badges",
    "@storybook/addon-coverage"
  ],
  features: {
    interactionsDebugger: true, // 👈 Enable playback controls
  },
  "framework": "@storybook/react"
}

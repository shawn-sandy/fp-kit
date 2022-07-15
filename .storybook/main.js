module.exports = {
  "stories": [
    "../libs/react/guides/**/*.stories.mdx",
    "../libs/react/**/*.stories.mdx",
    "../libs/react/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-interactions",
    "@storybook/addon-storysource",
    "@geometricpanda/storybook-addon-badges"
  ],
  "framework": "@storybook/react"
}

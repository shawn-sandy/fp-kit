import './style.css'
// import '@shawnsandy/first-paint/dist/css/libs/all.min.css'
import '../libs/react/fpkit/src/styles/styles/index.css'

import * as React from 'react'
import CustomDocs from './templates/custom-docs'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  // viewMode: 'docs',
  // previewTabs: { 'storybook/docs/panel': { index: -1 } },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    sort: {
      method: 'alphabetical',
    },
  },
  docs: {
    autodocs: true,
    page: CustomDocs,
    toc: true, // 👈 Enables the table of contents
  },
  layout: 'centered',
  // @geometricpanda/storybook-addon-badges
  badgesConfig: {
    beta: {
      styles: {
        backgroundColor: '#FFF',
        borderColor: '#018786',
        color: '#018786',
      },
      title: 'Beta',
    },
    deprecated: {
      styles: {
        backgroundColor: '#FFF',
        borderColor: '#6200EE',
        color: '#6200EE',
      },
      title: 'Deprecated',
    },
  },
}

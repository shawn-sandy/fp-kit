import './style.css'
// import '@shawnsandy/first-paint/dist/css/libs/all.min.css'
import '../libs/react/fpkit/src/styles/index.css'

import { Preview } from '@storybook/react'

import CustomDocs from './templates/custom-docs'

export const preview: Preview = {
  parameters: {
    // actions: { argTypesRegex: '^on.*' },
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
    // layout: 'padded',
  },

  tags: ['autodocs']
}

export default preview

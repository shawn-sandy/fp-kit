import './style.css'
import '@shawnsandy/first-paint/dist/css/libs/all.min.css'

import * as React from 'react'
import * as DocBlock from '@storybook/blocks'

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
    page: () => (
      <>
        <DocBlock.Title />
        <DocBlock.Subtitle />
        <DocBlock.Description />
        <DocBlock.Primary />
        <DocBlock.Controls />
        <DocBlock.Source />
        <DocBlock.Stories />
      </>
    ),
  },
  layout: 'centered',
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

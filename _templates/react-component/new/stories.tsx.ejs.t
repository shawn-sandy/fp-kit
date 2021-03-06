---
to: <%= absPath %>/<%= path %>.stories.tsx
---

import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import <%= componentName %> from './index'
import <%= componentName %>'.scss'

export default {
  title: 'Component/<%= componentName %>',
  component: <%= componentName %>,
  layout: 'padded',
  status: {
    type: 'alpha',
  },
} as ComponentMeta<typeof <%= componentName %>>

export const Primary: ComponentStory<typeof <%= componentName %>> = () => (
  <<%= componentName %>>Example</<%= componentName %>>
)

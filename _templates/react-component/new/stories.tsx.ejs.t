---
to: <%= absPath %>/<%= path %>.stories.tsx
---

import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import <%= component_name %> from './index'

export default {
  title: 'Component/<%= component_name %>',
  component: <%= component_name %>,
  layout: 'padded',
  status: {
    type: 'alpha',
  },
} as ComponentMeta<typeof <%= component_name %>>

export const Primary: ComponentStory<typeof <%= component_name %>> = () => (
  <<%= component_name %>>Example</<%= component_name %>>
)

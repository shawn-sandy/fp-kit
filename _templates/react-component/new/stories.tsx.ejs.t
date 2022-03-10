---
to: <%= absPath %>/src/component/<%= component_name %>.stories.tsx
---

import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import <%= component_name %> from './<%= component_name %>/index'

export default {
  title: 'Example',
  component: Example,
  layout: 'padded',
  status: {
    type: 'alpha',
  },
} as ComponentMeta<typeof Example>

export const Primary: ComponentStory<typeof Example> = () => (
  <Example primary>Example</Example>
)

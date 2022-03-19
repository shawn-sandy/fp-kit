---
to: <%= absPath %>/<%= path %>.stories.tsx
---

import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import <%= componentName %> from './<%= path %>'
import "./<%= path %>.scss"

export default {
  title: '<%= h.inflection.camelize(subFolder) %>/<%= componentName %>/Examples',
  component: <%= componentName %>,
  layout: 'padded',
  status: {
    type: 'alpha',
  },
} as ComponentMeta<typeof <%= componentName %>>


export const <%= h.inflection.camelize(componentName) %>Story: ComponentStory<typeof <%= componentName %>> = () => (
  <<%= componentName %>>Example</<%= componentName %>>
)

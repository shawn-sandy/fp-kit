import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import DataTables from './index'

export default {
  title: 'Component/DataTables',
  component: DataTables,
  layout: 'padded',
  status: {
    type: 'alpha',
  },
} as ComponentMeta<typeof DataTables>

export const Primary: ComponentStory<typeof DataTables> = () => (
  <DataTables>Example</DataTables>
)

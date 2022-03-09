/** @format */

// DataTable.stories.ts|tsx

import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import DataTable from './data-table'

export default {
  title: 'DataTable',
  component: DataTable,
  layout: 'padded',
  status: {
    type: 'alpha'
  }
} as ComponentMeta<typeof DataTable>

export const Primary: ComponentStory<typeof DataTable> = () => (
  <DataTable>DataTable</DataTable>
)

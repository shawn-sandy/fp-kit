import React from 'react'
import { Summary } from './details-summary'
import "./details-summary.scss"

export default {
  title: 'Elements/Details/Summary',
  component: Summary,
  parameters: {
    layout: 'padded'
  }
}

const Template = (args) => <Summary {...args} />

export const SummaryElement = Template.bind({})

SummaryElement.args = {
  children: 'Summary Element'
}

// export const Red = Template.bind({})
// Red.args = {
// children: 'Red Example',
// styles: { '--btn-bg': 'red', '--btn-color': 'white' },
// onClick: () => console.log('Clicked DefaultName Example')
// }

import React from 'react'
import Details from './details-summary'
import { SummaryElement } from './summary.stories'
// import './index.css'
import "./details-summary.scss"

export default {
  title: 'Elements/Details/Component',
  component: Details,
  subcomponents: { SummaryElement },
  parameters: {
    layout: 'padded'
  }
}

const Template = (args) => (
  <Details { ...args }>
    <SummaryElement>{ args.title }</SummaryElement>
    <p>{ args.children }</p>
  </Details>)

export const DetailsElement = Template.bind({})

DetailsElement.args = {
  children: 'Add some content here to make it work',
  title: 'Element Title'
}

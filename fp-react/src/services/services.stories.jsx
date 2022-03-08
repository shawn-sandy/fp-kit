import React from 'react'
import Services from './services'

export default {
  title: 'Services/Demo',
  component: Services
}

const Template = (args) => <Services {...args} />

export const Demo = Template.bind({})

Demo.args = {
  children: 'Displays the services date here'
}

// export const Red = Template.bind({})
// Red.args = {
//   children: 'Red Services',
//   styles: { '--btn-bg': 'red', '--btn-color': 'white' },
//   onClick: () => console.log('Clicked DefaultName Services')
// }

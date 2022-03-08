import React from 'react'
import LandingPage from './landing-page'

export default {
  title: 'Pages/LandingPage',
  component: LandingPage,
  parameters: {
    layout: 'padded',
  }
}

const Header = () => (
  <header>
    <h1>Hello World</h1>
  </header>
)


const Template = args => {
  return (
    <LandingPage { ...args }>
      <h1>Hello World</h1>
    </LandingPage >
  )
}

export const CoverPage = Template.bind({})

CoverPage.args = {
  // children: <p>Lorem test conentn</p>,
  footer: <p>Footer content</p>,
}

import { StoryObj, Meta } from '@storybook/react'

import { Text, Title } from './text'

const meta: Meta<typeof Text> = {
  title: 'FP.React Components/TextComponents',
  component: Text,
  subcomponents: { Title },
}

export default meta
type Story = StoryObj<typeof Text>

export const Default: Story = {
  args: {
    text: 'Default Text'
  },
}

export const TitleText: Story = {
  render: () => (
    <>
      <Text elm="h1">Default Title</Text>
      {/* <Title>Default Title</Title> */}
    </>
  ),
}

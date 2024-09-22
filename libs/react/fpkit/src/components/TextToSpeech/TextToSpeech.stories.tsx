
import { StoryObj, Meta } from '@storybook/react'
import { within, userEvent, screen } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import TextToSpeech from './TextToSpeech'

const meta: Meta<typeof TextToSpeech> = {
  title: 'FP.REACT Components/TextToSpeech',
  component: TextToSpeech,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    docs: {
      description: {
        component:
          'TextToSpeech description here...',
      },
    },
  },
  args: {
    text: 'Hello, this is a sample text for the Text-to-Speech component.',
    selectedVoice: 'Google US English',
    rate: 1,
    pitch: 1,
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'The text to be spoken',
    },
    selectedVoice: {
      control: 'select',
      options: ['Google US English', 'Microsoft David - English (United States)', 'Microsoft Zira - English (United States)'],
      description: 'The selected voice for speech synthesis',
    },
    rate: {
      control: { type: 'range', min: 0.5, max: 2, step: 0.1 },
      description: 'The speech rate',
    },
    pitch: {
      control: { type: 'range', min: 0.5, max: 2, step: 0.1 },
      description: 'The speech pitch',
    },
  },
} as Story;

export default meta
type Story = StoryObj<typeof TextToSpeech >

export const TextToSpeechComponent: Story = {

}

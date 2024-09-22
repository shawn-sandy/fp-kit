
import { StoryObj, Meta } from '@storybook/react'
import { within, userEvent, screen } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import VoiceSelector from './VoiceSelector'

const mockGroupedVoices = {
  'en-US': [
    { name: 'English Voice 1', lang: 'en-US', default: false, localService: true, voiceURI: 'English1' },
    { name: 'English Voice 2', lang: 'en-US', default: false, localService: true, voiceURI: 'English2' },
  ],
  'fr-FR': [
    { name: 'French Voice 1', lang: 'fr-FR', default: false, localService: true, voiceURI: 'French1' },
    { name: 'French Voice 2', lang: 'fr-FR', default: false, localService: true, voiceURI: 'French2' },
  ],
  'es-ES': [
    { name: 'Spanish Voice 1', lang: 'es-ES', default: false, localService: true, voiceURI: 'Spanish1' },
    { name: 'Spanish Voice 2', lang: 'es-ES', default: false, localService: true, voiceURI: 'Spanish2' },
  ],
} as const;

const meta: Meta<typeof VoiceSelector> = {
  title: 'FP.REACT Components/VoiceSelector',
  component: VoiceSelector,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    docs: {
      description: {
        component:
          'VoiceSelector description here...',
      },
    },
  },
  args: {
    selectedVoice: 'English Voice 1',
    setSelectedVoice: () => {},
    groupedVoices: mockGroupedVoices,
  },
} as Story;

export default meta
type Story = StoryObj<typeof VoiceSelector >

export const VoiceSelectorComponent: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/link/i)).toBeInTheDocument()
  },
} as Story;



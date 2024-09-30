import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import TextToSpeech from './TextToSpeech'
import './text-to-speech.scss'

const meta: Meta<typeof TextToSpeech> = {
  title: 'FP.REACT Components/TextToSpeech',
  component: TextToSpeech,
  tags: ['autodocs'],
  argTypes: {
    voice: {
      control: {
        type: 'select',
        options: [
          'Google US English',
          'Google UK English Female',
          'Google UK English Male',
        ],
      },
    },
  },
} as Story

export default meta

type Story = StoryObj<typeof TextToSpeech>

export const Default: Story = {
  args: {
    label: 'Read post',
    initialText:
      'Hello, how are you? I am a Text to Speech (TTS) assistant! Update this text and click the [speak] button to hear the change.',
  },
  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates the TextToSpeechComponent with predefined text and hidden text input. It's useful for scenarios where you want to display the component with a fixed text, without allowing the user to modify it.",
      },
    },
  },
} as Story

export const WithText: Story = {
  args: {
    // Add props to simulate text input
    initialText:
      'This is a test of the text to speech component. Here the test is passed as a prop and the text input is hidden.',
    showTextInput: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates the TextToSpeechComponent with predefined text and hidden text input. It's useful for scenarios where you want to display the component with a fixed text, without allowing the user to modify it.",
      },
    },
  },
} as Story

export const FullFeature: Story = {
  args: {
    initialText:
      'Welcome to the full-featured Text-to-Speech component. You can modify this text, choose a voice, adjust pitch and rate, and then click the speak button to hear it.',
    showTextInput: true,
    pitch: 1,
    rate: 1,
  },
  parameters: {
    docs: {
      description: {
        story:
          "This story showcases all features of the TextToSpeechComponent, including text input, voice selection, pitch and rate adjustment. It provides a comprehensive demonstration of the component's capabilities.",
      },
    },
  },
  render: (args) => {
    const [selectedVoice, setSelectedVoice] = React.useState<
      SpeechSynthesisVoice | undefined
    >(undefined)
    const [pitch, setPitch] = React.useState(1)
    const [rate, setRate] = React.useState(1)

    React.useEffect(() => {
      const voices = window.speechSynthesis.getVoices()
      setSelectedVoice(
        voices.find((voice) => voice.name === 'Google US English') || voices[0],
      )
    }, [])

    return (
      <div>
        <TextToSpeech
          {...args}
          voice={selectedVoice}
          pitch={pitch}
          rate={rate}
        />
        <div style={{ marginTop: '20px' }}>
          <label htmlFor="voice-select">Select Voice: </label>
          <select
            id="voice-select"
            onChange={(e) =>
              setSelectedVoice(
                window.speechSynthesis
                  .getVoices()
                  .find((v) => v.name === e.target.value),
              )
            }
          >
            {window.speechSynthesis.getVoices().map((voice) => (
              <option key={voice.name} value={voice.name}>
                {voice.name} ({voice.lang})
              </option>
            ))}
          </select>
        </div>
        <div style={{ marginTop: '10px' }}>
          <label htmlFor="pitch-range">Pitch: {pitch}</label>
          <input
            id="pitch-range"
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={pitch}
            onChange={(e) => setPitch(parseFloat(e.target.value))}
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label htmlFor="rate-range">Rate: {rate}</label>
          <input
            id="rate-range"
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(parseFloat(e.target.value))}
          />
        </div>
      </div>
    )
  },
} as Story

import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import TextToSpeechComponent from './TextToSpeech';

const meta: Meta<typeof TextToSpeechComponent> = {
  title: 'FP.REACT Components/TextToSpeech',
  component: TextToSpeechComponent,
  tags: ['autodocs'],
} as Story;

export default meta;

type Story = StoryObj<typeof TextToSpeechComponent>;

export const Default: Story = {
  args: {
    initialText: 'Hello, how are you? I am a Text to Speech (TTS) assistant! Update this text and click the [speak] button to hear the change.',

  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the TextToSpeechComponent with predefined text and hidden text input. It\'s useful for scenarios where you want to display the component with a fixed text, without allowing the user to modify it.',
      },
    },
  },
} as Story;

export const WithText: Story = {
  args: {
    // Add props to simulate text input
    initialText: 'This is a test of the text to speech component. Here the test is passed as a prop and the text input is hidden.',
    showTextInput: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the TextToSpeechComponent with predefined text and hidden text input. It\'s useful for scenarios where you want to display the component with a fixed text, without allowing the user to modify it.',
      },
    },
  },
} as Story;

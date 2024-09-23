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
    initialText: 'Hello, how are you I am a Text to Speech (TTS) assistant!',
  },
} as Story;

export const WithText: Story = {
  args: {
    // Add props to simulate text input
    initialText: 'This is a test of the text to speech component.',
    showTextInput: false,
  },
} as Story;

import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import TextToSpeechComponent from './TextToSpeech';

const meta: Meta<typeof TextToSpeechComponent> = {
  title: 'Components/TextToSpeechComponent',
  component: TextToSpeechComponent,
  tags: ['autodocs'],
} as Story;

export default meta;

type Story = StoryObj<typeof TextToSpeechComponent>;

export const Default: Story = {
  args: {
    initialText: 'Hello, world!',
  },
} as Story;

export const WithText: Story = {
  args: {
    // Add props to simulate text input
    initialText: 'This is a test of the text to speech component.',
    showTextInput: false,
  },
} as Story;

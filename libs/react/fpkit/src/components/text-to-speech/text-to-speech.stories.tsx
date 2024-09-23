import { StoryObj, Meta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import TextToSpeechComponent from './TextToSpeech';

const meta: Meta<typeof TextToSpeechComponent> = {
  title: 'FP.REACT Components/TextToSpeech',
  component: TextToSpeechComponent,
  args: {
    text: 'Hello, this is a test of the text-to-speech component.',
  },
} as Meta<typeof TextToSpeechComponent>;

export default meta;
type Story = StoryObj<typeof TextToSpeechComponent>;

export const Default: Story = {
  args: {},
};

export const CustomLanguage: Story = {
  args: {
    text: 'Bonjour, ceci est un test du composant de synthèse vocale.',
    lang: 'fr-FR',
  },
};

export const CustomRateAndPitch: Story = {
  args: {
    rate: 0.8,
    pitch: 1.2,
  },
};

export const InteractionTest: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const speakButton = canvas.getByText('Speak');

    // Click the speak button
    await userEvent.click(speakButton);

    // Check if the button text changes to "Speaking..."
    expect(canvas.getByText('Speaking...')).toBeInTheDocument();

    // Check if the stop button appears
    const stopButton = canvas.getByText('Stop');
    expect(stopButton).toBeInTheDocument();

    // Click the stop button
    await userEvent.click(stopButton);

    // Check if the speak button is enabled again
    expect(canvas.getByText('Speak')).toBeEnabled();
  },
};

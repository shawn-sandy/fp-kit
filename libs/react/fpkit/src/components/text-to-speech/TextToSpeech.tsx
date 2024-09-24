import React, { useState, ChangeEvent, useEffect } from 'react';
import { useTextToSpeech } from './useTextToSpeech';
import Button from '#components/buttons/button';
import Textarea from "#components/form/textarea.jsx";

/**
 * Props for the TextToSpeechComponent.
 * @interface TextToSpeechComponentProps
 */
interface TextToSpeechComponentProps {
  /** Initial text to be spoken. Defaults to an empty string. */
  initialText?: string;
  /** Whether to show the text input field. Defaults to true. */
  showTextInput?: boolean;
  /** The voice to be used for speech synthesis. */
  voice?: SpeechSynthesisVoice | undefined;
  /** The pitch of the voice. Defaults to 1. */
  pitch?: number;
  /** The rate of speech. Defaults to 1. */
  rate?: number;
}

/**
 * A component that converts text to speech using the Web Speech API.
 * @param {TextToSpeechComponentProps} props - The props for the component.
 * @returns {JSX.Element} The rendered TextToSpeechComponent.
 */
const TextToSpeechComponent: React.FC<TextToSpeechComponentProps> = ({
  initialText = '',
  showTextInput = true,
  voice,
  pitch = 1,
  rate = 1,
}) => {
  const { speak, pause, resume, cancel, isSpeaking, isPaused, getAvailableLanguages, availableVoices } = useTextToSpeech();
  const [text, setText] = useState<string>(initialText);
  console.log(getAvailableLanguages());

  useEffect(() => {
    setText(initialText);
  }, [initialText]);

  /**
   * Handles the speak button click event.
   * Speaks the current text if it's not empty.
   */
  const handleSpeak = (): void => {
    if (text.trim() !== '') {
      speak(text);
    }
  };

  /**
   * Handles changes in the textarea input.
   * @param {ChangeEvent<HTMLTextAreaElement>} e - The change event.
   */
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setText(e.target.value);
  };

  return (
    <>
      {showTextInput && <Textarea value={text} onChange={handleChange} />}
      <div style={{ display: 'flex', gap: '10px' }}>
        <Button type="button" onClick={handleSpeak} disabled={isSpeaking}>
          Speak
        </Button>
        <button type="button" onClick={pause} disabled={!isSpeaking || isPaused}>
          Pause
        </button>
        <button type="button" onClick={resume} disabled={!isPaused}>
          Resume
        </button>
        <button type="button" onClick={cancel} disabled={!isSpeaking}>
          Cancel
        </button>
      </div>
    </>
  );
};

export default TextToSpeechComponent;

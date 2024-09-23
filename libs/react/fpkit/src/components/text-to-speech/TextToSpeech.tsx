import React, { useState, ChangeEvent, useEffect } from 'react';
import { useTextToSpeech } from './useTextToSpeech';
import Button from '../buttons/button'; // Changed 'Button' to 'button'

interface TextToSpeechComponentProps {
  initialText?: string;
  showTextInput?: boolean;
}

const TextToSpeechComponent: React.FC<TextToSpeechComponentProps> = ({ initialText = '', showTextInput = true }) => {
  const { speak, pause, resume, cancel, isSpeaking, isPaused } = useTextToSpeech();
  const [text, setText] = useState<string>(initialText);

  useEffect(() => {
    setText(initialText);
  }, [initialText]);

  const handleSpeak = (): void => {
    if (text.trim() !== '') {
      speak(text);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setText(e.target.value);
  };

  return (
    <>
      {showTextInput && (
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter text to speak"
        style={{ width: '100%', height: '100px', marginBottom: '10px' }}
      />
      )}
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

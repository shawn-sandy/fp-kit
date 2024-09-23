import React, { useState, ChangeEvent, useEffect } from 'react';
import { useTextToSpeech } from './useTextToSpeech';
import Button from '#components/buttons/button';
import Textarea from "#components/form/textarea.jsx";

interface TextToSpeechComponentProps {
  initialText?: string;
  showTextInput?: boolean;
  voice?: SpeechSynthesisVoice | undefined;
  pitch?: number;
  rate?: number;
}

const TextToSpeechComponent: React.FC<TextToSpeechComponentProps> = ({
  initialText = '',
  showTextInput = true,
  voice,
  pitch = 1,
  rate = 1,
}) => {
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

import React, { ChangeEvent } from 'react';

interface GroupedVoices {
  [key: string]: SpeechSynthesisVoice[];
}

interface TextToSpeechPresentationProps {
  text: string;
  setText: (text: string) => void;
  selectedVoice: string;
  setSelectedVoice: (voice: string) => void;
  groupedVoices: GroupedVoices;
  rate: number;
  setRate: (rate: number) => void;
  pitch: number;
  setPitch: (pitch: number) => void;
  handleSpeak: () => void;
  handlePause: () => void;
  handleStop: () => void;
  isPaused: boolean;
  utterance: SpeechSynthesisUtterance | null;
  progress: number;
  status: string;
}

const TextToSpeechPresentation: React.FC<TextToSpeechPresentationProps> = ({
  text,
  setText,
  selectedVoice,
  setSelectedVoice,
  groupedVoices,
  rate,
  setRate,
  pitch,
  setPitch,
  handleSpeak,
  handlePause,
  handleStop,
  isPaused,
  utterance,
  progress,
  status,
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '600px', margin: 'auto' }}>
      <div>
        <label htmlFor="text-input">Enter text to speak:</label>
        <textarea
          id="text-input"
          value={text}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
          placeholder="Paste your blog post here..."
          style={{ width: '100%', height: '150px', marginTop: '0.5rem' }}
        />
      </div>
      <div>
        <label htmlFor="voice-select">Select a voice:</label>
        <select
          id="voice-select"
          value={selectedVoice}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedVoice(e.target.value)}
          style={{ width: '100%', marginTop: '0.5rem' }}
        >
          {Object.entries(groupedVoices).map(([lang, langVoices]) => (
            <optgroup key={lang} label={new Intl.DisplayNames([lang], { type: 'language' }).of(lang)}>
              {langVoices.map((voice) => (
                <option key={voice.name} value={voice.name}>
                  {voice.name} ({voice.lang})
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="rate-input">Speech Rate: {rate.toFixed(1)}</label>
        <input
          id="rate-input"
          type="range"
          min={0.5}
          max={2}
          step={0.1}
          value={rate}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setRate(parseFloat(e.target.value))}
          style={{ width: '100%' }}
        />
      </div>
      <div>
        <label htmlFor="pitch-input">Pitch: {pitch.toFixed(1)}</label>
        <input
          id="pitch-input"
          type="range"
          min={0.5}
          max={2}
          step={0.1}
          value={pitch}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPitch(parseFloat(e.target.value))}
          style={{ width: '100%' }}
        />
      </div>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button onClick={handleSpeak} disabled={!text}>
          {isPaused ? 'Resume' : 'Speak'}
        </button>
        <button onClick={handlePause} disabled={!utterance || isPaused}>
          Pause
        </button>
        <button onClick={handleStop} disabled={!utterance}>
          Stop
        </button>
      </div>
      <div>
        <label>Progress:</label>
        <progress value={progress} max={100} style={{ width: '100%', marginTop: '0.5rem' }} />
      </div>
      <div>
        <label>Status: {status}</label>
      </div>
    </div>
  );
};

export default TextToSpeechPresentation;

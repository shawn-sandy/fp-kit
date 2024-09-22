import React, { ChangeEvent } from 'react';

interface GroupedVoices {
  [key: string]: SpeechSynthesisVoice[];
}

interface VoiceSelectorProps {
  selectedVoice: string;
  setSelectedVoice: (voice: string) => void;
  groupedVoices: GroupedVoices;
}

const VoiceSelector: React.FC<VoiceSelectorProps> = ({
  selectedVoice,
  setSelectedVoice,
  groupedVoices,
}) => {
  return (
    <>
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
    </>
  );
};

export default VoiceSelector;

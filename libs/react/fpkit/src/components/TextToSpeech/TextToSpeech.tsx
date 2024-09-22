import React, { useState, useEffect, useRef, ChangeEvent } from 'react';

interface GroupedVoices {
  [key: string]: SpeechSynthesisVoice[];
}

const TextToSpeech: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string>('');
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);
  const [groupedVoices, setGroupedVoices] = useState<GroupedVoices>({});
  const [progress, setProgress] = useState<number>(0);
  const [status, setStatus] = useState<string>('');
  const [rate, setRate] = useState<number>(1);
  const [pitch, setPitch] = useState<number>(1);
  const wordCountRef = useRef<number>(0);
  const wordsSpokenRef = useRef<number>(0);
  const synth = window.speechSynthesis;

  useEffect(() => {
    const updateVoices = () => {
      const availableVoices = synth.getVoices();
      setVoices(availableVoices);

      const grouped = availableVoices.reduce<GroupedVoices>((acc, voice) => {
        const lang = voice.lang.split('-')[0];
        if (!acc[lang]) acc[lang] = [];
        acc[lang].push(voice);
        return acc;
      }, {});
      setGroupedVoices(grouped);

      const googleVoice = availableVoices.find(voice => 
        voice.name.toLowerCase().includes('google') && 
        voice.lang === 'en-US'
      );

      if (googleVoice) {
        setSelectedVoice(googleVoice.name);
      } else if (availableVoices.length > 0) {
        const englishVoice = availableVoices.find(voice => voice.lang.startsWith('en-'));
        setSelectedVoice(englishVoice ? englishVoice.name : availableVoices[0].name);
      }
    };

    updateVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = updateVoices;
    }

    return () => {
      synth.cancel();
    };
  }, []);

  const createUtterance = (text: string): SpeechSynthesisUtterance => {
    const newUtterance = new SpeechSynthesisUtterance(text);
    if (selectedVoice) {
      const voice = voices.find(v => v.name === selectedVoice);
      if (voice) newUtterance.voice = voice;
    }
    newUtterance.rate = rate;
    newUtterance.pitch = pitch;

    newUtterance.onboundary = (event: SpeechSynthesisEvent) => {
      if (event.name === 'word') {
        wordsSpokenRef.current++;
        setProgress((wordsSpokenRef.current / wordCountRef.current) * 100);
      }
    };

    newUtterance.onstart = () => setStatus('Speaking');
    newUtterance.onpause = () => setStatus('Paused');
    newUtterance.onresume = () => setStatus('Speaking');
    newUtterance.onend = () => {
      setStatus('Finished');
      setProgress(100);
    };

    return newUtterance;
  };

  const handleSpeak = () => {
    if (isPaused && utterance) {
      synth.resume();
      setStatus('Speaking');
    } else {
      synth.cancel();
      const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
      wordCountRef.current = text.split(/\s+/).length;
      wordsSpokenRef.current = 0;

      sentences.forEach((sentence, index) => {
        const utterance = createUtterance(sentence.trim());
        if (index === 0) {
          setUtterance(utterance);
        }
        synth.speak(utterance);
      });
    }
    setIsPaused(false);
  };

  const handlePause = () => {
    synth.pause();
    setIsPaused(true);
    setStatus('Paused');
  };

  const handleStop = () => {
    synth.cancel();
    setIsPaused(false);
    setProgress(0);
    setStatus('Stopped');
  };

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

export default TextToSpeech;

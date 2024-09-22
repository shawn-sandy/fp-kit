import React, { useState, useEffect, useRef } from 'react';
import TextToSpeechPresentation from './TextToSpeechPresentation';

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
    <TextToSpeechPresentation
      text={text}
      setText={setText}
      selectedVoice={selectedVoice}
      setSelectedVoice={setSelectedVoice}
      groupedVoices={groupedVoices}
      rate={rate}
      setRate={setRate}
      pitch={pitch}
      setPitch={setPitch}
      handleSpeak={handleSpeak}
      handlePause={handlePause}
      handleStop={handleStop}
      isPaused={isPaused}
      utterance={utterance}
      progress={progress}
      status={status}
    />
  );
};

export default TextToSpeech;

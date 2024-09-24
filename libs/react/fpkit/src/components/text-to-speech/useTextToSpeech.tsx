import { useState, useEffect } from 'react';

interface SpeechOptions {
  lang?: string;
  voice?: SpeechSynthesisVoice;
  pitch?: number;
  rate?: number;
}

/**
 * Custom hook to handle text-to-speech functionality.
 *
 * @returns {Object} - An object containing methods to control speech synthesis and state variables.
 */
export const useTextToSpeech = (initialVoice?: SpeechSynthesisVoice) => {
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [currentVoice, setCurrentVoice] = useState<SpeechSynthesisVoice | undefined>(initialVoice);

  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    const updateVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      setAvailableVoices(voices);

      // Set default voice to Google US English if available
      const googleVoice = voices.find(voice => voice.name === 'Google US English');
      if (googleVoice) {
        setCurrentVoice(googleVoice);
      } else {
        // Fallback to the first English voice if Google voice is not available
        const englishVoice = voices.find(voice => voice.lang.startsWith('en-'));
        if (englishVoice) {
          setCurrentVoice(englishVoice);
        }
      }
    };

    updateVoices();
    window.speechSynthesis.onvoiceschanged = updateVoices;

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const getAvailableLanguages = () => {
    return [...new Set(availableVoices.map(voice => voice.lang))];
  };

  /**
   * Initiates speech synthesis for the given text.
   *
   * @param {string} text - The text to be spoken.
   * @param {SpeechOptions} [options={}] - Options for speech synthesis.
   */
  const speak = (text: string, options: SpeechOptions = {}) => {
    const utterance = new SpeechSynthesisUtterance(text);
    const { lang = 'en-US', pitch = 1, rate = 1 } = options;

    utterance.lang = lang;
    utterance.pitch = pitch;
    utterance.rate = rate;
    utterance.voice = currentVoice ?? options.voice ?? null;

    window.speechSynthesis.speak(utterance);
    setUtterance(utterance);
    setIsSpeaking(true);
    setIsPaused(false);
  };

  const changeVoice = (voice: SpeechSynthesisVoice) => {
    setCurrentVoice(voice);
  };

  /**
   * Pauses the ongoing speech synthesis.
   */
  const pause = () => {
    if (isSpeaking && !isPaused) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    }
  };

  /**
   * Resumes the paused speech synthesis.
   */
  const resume = () => {
    if (isSpeaking && isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    }
  };

  /**
   * Cancels the ongoing speech synthesis.
   */
  const cancel = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setIsPaused(false);
    }
  };

  return {
    speak,
    pause,
    resume,
    cancel,
    isSpeaking,
    isPaused,
    availableVoices,
    changeVoice,
    currentVoice,
    getAvailableLanguages
  };
};

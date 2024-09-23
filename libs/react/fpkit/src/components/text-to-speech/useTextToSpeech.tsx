import { useState, useEffect } from 'react';

/**
 * Custom hook to handle text-to-speech functionality.
 *
 * @returns {Object} - An object containing methods to control speech synthesis and state variables.
 */
export const useTextToSpeech = () => {
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);

  /**
   * Initiates speech synthesis for the given text.
   *
   * @param {string} text - The text to be spoken.
   * @param {string} [lang='en-US'] - The language of the speech.
   * @param {SpeechSynthesisVoice} [voice] - The voice to use for the speech.
   * @param {number} [pitch=1] - The pitch of the speech.
   * @param {number} [rate=1] - The rate of the speech.
   */
  const speak = (text: string, lang: string = 'en-US', voice: SpeechSynthesisVoice | undefined = undefined, pitch: number = 1, rate: number = 1) => {
    if (!window.speechSynthesis) {
      console.error('SpeechSynthesis API not supported');
      return;
    }

    // If there's ongoing speech, stop it
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }

    const newUtterance = new SpeechSynthesisUtterance(text);
    newUtterance.lang = lang;

    newUtterance.onstart = () => {
      setIsSpeaking(true);
    };

    newUtterance.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };

    window.speechSynthesis.speak(newUtterance);
    setUtterance(newUtterance);
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

  return { speak, pause, resume, cancel, isSpeaking, isPaused };
};

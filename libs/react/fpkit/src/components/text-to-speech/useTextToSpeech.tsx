import { useState, useEffect } from 'react'

/**
 * Options for configuring speech synthesis.
 * @interface SpeechOptions
 */
interface SpeechOptions {
  /** The language for speech synthesis (e.g., 'en-US') */
  lang?: string

  /** The pitch of the voice (0 to 2) */
  pitch?: number
  /** The speed of the voice (0.1 to 10) */
  rate?: number

  /** The voice to use for speech synthesis */
  voice?: SpeechSynthesisVoice
}
/**
 * Custom hook to handle text-to-speech functionality.
 *
 * @param {SpeechSynthesisVoice} [initialVoice] - The initial voice to use for speech synthesis.
 * @returns {Object} An object containing methods to control speech synthesis and state variables.
 */
export const useTextToSpeech = (initialVoice?: SpeechSynthesisVoice) => {
  const [availableVoices, setAvailableVoices] = useState<
    SpeechSynthesisVoice[]
  >([])
  const [currentVoice, setCurrentVoice] = useState<
    SpeechSynthesisVoice | undefined
  >(initialVoice)

  const [isSpeaking, setIsSpeaking] = useState<boolean>(false)
  const [isPaused, setIsPaused] = useState<boolean>(false)
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(
    null,
  )

  useEffect(() => {
    const updateVoices = () => {
      const voices = window.speechSynthesis.getVoices()
      setAvailableVoices(voices)

      // Set default voice to Google US English if available
      const googleVoice = voices.find(
        (voice) => voice.name === 'Google US English',
      )
      if (googleVoice) {
        setCurrentVoice(googleVoice)
      } else {
        // Fallback to the first English voice if Google voice is not available
        const englishVoice = voices.find((voice) =>
          voice.lang.startsWith('en-'),
        )
        if (englishVoice) {
          setCurrentVoice(englishVoice)
        }
      }
    }

    updateVoices()
    window.speechSynthesis.onvoiceschanged = updateVoices

    return () => {
      window.speechSynthesis.onvoiceschanged = null
    }
  }, [])

  /**
   * Gets the list of available languages for speech synthesis.
   * @returns {string[]} An array of available language codes.
   */
  const getAvailableLanguages = () => {
    return [...new Set(availableVoices.map((voice) => voice.lang))]
  }

  /**
   * Initiates speech synthesis for the given text.
   *
   * @param {string} text - The text to be spoken.
   * @param {SpeechOptions} [options={}] - Options for speech synthesis.
   * @param {Function} [onEnd] - Callback function to be called when speech ends.
   */
  const speak = (
    text: string,
    options: SpeechOptions = {},
    onEnd?: () => void,
  ) => {
    const utterance = new SpeechSynthesisUtterance(text)

    utterance.lang = options.lang ?? 'en-US'
    utterance.pitch = options.pitch ?? 1
    utterance.rate = options.rate ?? 1
    utterance.voice = currentVoice ?? options.voice ?? null

    utterance.onend = () => {
      setIsSpeaking(false)
      setIsPaused(false)
      if (onEnd) {
        onEnd()
      }
    }

    if ('speechSynthesis' in window) {
      window.speechSynthesis.speak(utterance)
      setUtterance(utterance)
      setIsSpeaking(true)
      setIsPaused(false)
    } else {
      console.error('Speech synthesis not supported')
      // Handle the error appropriately
    }
  }

  /**
   * Changes the current voice used for speech synthesis.
   * @param {SpeechSynthesisVoice} voice - The new voice to use.
   */
  const changeVoice = (voice: SpeechSynthesisVoice) => {
    setCurrentVoice(voice)
  }

  /**
   * Pauses the ongoing speech synthesis.
   */
  const pause = () => {
    if (isSpeaking && !isPaused) {
      window.speechSynthesis.pause()
      setIsPaused(true)
    }
  }

  /**
   * Resumes the paused speech synthesis.
   */
  const resume = () => {
    if (isSpeaking && isPaused) {
      window.speechSynthesis.resume()
      setIsPaused(false)
    }
  }

  /**
   * Cancels the ongoing speech synthesis.
   */
  const cancel = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel()
      setIsSpeaking(false)
      setIsPaused(false)
    }
  }

  return {
    /** Initiates speech synthesis for the given text */
    speak,
    /** Pauses the ongoing speech synthesis */
    pause,
    /** Resumes the paused speech synthesis */
    resume,
    /** Cancels the ongoing speech synthesis */
    cancel,
    /** Indicates whether speech synthesis is currently active */
    isSpeaking,
    /** Indicates whether speech synthesis is currently paused */
    isPaused,
    /** Array of available voices for speech synthesis */
    availableVoices,
    /** Changes the current voice used for speech synthesis */
    changeVoice,
    /** The currently selected voice for speech synthesis */
    currentVoice,
    /** Gets the list of available languages for speech synthesis */
    getAvailableLanguages,
  }
}

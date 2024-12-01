import React, { useState, ChangeEvent, useEffect } from 'react'
import { useTextToSpeech } from './useTextToSpeech'
import Textarea from '#components/form/textarea.jsx'
import TextToSpeechControls from './views/TextToSpeechControls'

/**
 * Props for the TextToSpeechComponent.
 * @interface TextToSpeechComponentProps
 */
interface TextToSpeechComponentProps {
  /** Initial text to be spoken. Defaults to an empty string. */
  initialText?: string
  /** Whether to show the text input field. Defaults to true. */
  showTextInput?: boolean
  /** The voice to be used for speech synthesis. */
  voice?: SpeechSynthesisVoice | undefined
  /** The pitch of the voice. Defaults to 1. */
  pitch?: number
  /** The rate of speech. Defaults to 1. */
  rate?: number
  /** The language to be used for speech synthesis. */
  language?: string
  /** Player label */
  label?: string | React.ReactNode
  /** Callback function to be called when speech ends. */
  onEnd?: () => void
}

/**
 * A component that converts text to speech using the Web Speech API.
 * @param {TextToSpeechComponentProps} props - The props for the component.
 * @returns {JSX.Element} The rendered TextToSpeechComponent.
 */
export const TextToSpeech: React.FC<TextToSpeechComponentProps> = ({
  initialText = '',
  showTextInput = false,
  voice,
  pitch = 1,
  rate = 1,
  language,
  label,
  onEnd,
}) => {
  const {
    speak,
    pause,
    resume,
    cancel,
    isSpeaking,
    isPaused,
    getAvailableLanguages,
    availableVoices,
  } = useTextToSpeech()
  const [text, setText] = useState<string>(initialText)
  console.log(getAvailableLanguages())

  useEffect(() => {
    setText(initialText)
  }, [initialText])

  const handleSpeak = (): void => {
    if (text.trim() !== '') {
      speak(text, { voice, pitch, rate }, handleEnd)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setText(e.target.value)
  }

  const handleEnd = (): void => {
    if (onEnd) {
      onEnd()
    }
  }

  return (
    <>
      {showTextInput && <Textarea value={text} onChange={handleChange} />}
      <TextToSpeechControls
        label={label}
        isSpeaking={isSpeaking}
        isPaused={isPaused}
        onSpeak={handleSpeak}
        onPause={pause}
        onResume={resume}
        onCancel={cancel}
      />
    </>
  )
}

export default TextToSpeech
TextToSpeech.displayName = 'TextToSpeechComponent'

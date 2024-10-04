import React from 'react'
import Icon from '#components/icons/icon'
import UI from '#components/ui'
import { FC } from 'react'

/**
 * Props for the TextToSpeechControls component.
 * @interface TextToSpeechControlsProps
 */
interface TextToSpeechControlsProps {
  /** Optional label for the controls */
  label?: string | React.ReactNode
  /** Indicates if the text-to-speech is currently speaking */
  isSpeaking: boolean
  /** Indicates if the text-to-speech is paused */
  isPaused: boolean
  /** Function to start speaking */
  onSpeak: () => void
  /** Function to pause speaking */
  onPause: () => void
  /** Function to resume speaking */
  onResume: () => void
  /** Function to cancel speaking */
  onCancel: () => void
}

/**
 * TTSButtonComponent props
 * @interface TTSButtonComponentProps
 */
interface TTSButtonComponentProps {
  /** The content of the button */
  children: React.ReactNode
  /** Function to call when the button is clicked */
  onClick: () => void
}

/**
 * TTSButtonComponent is a reusable button component for text-to-speech controls.
 * @param {TTSButtonComponentProps} props - The component props
 * @returns {React.ReactElement} The rendered button
 */
export const TTSButtonComponent: React.FC<TTSButtonComponentProps> = ({
  children,
  onClick,
}) => {
  return (
    <UI
      as="button"
      type="button"
      className="tts-border"
      data-btn="sm text pill"
      onClick={onClick}
    >
      {children}
    </UI>
  )
}

export const TTSButton = React.memo(TTSButtonComponent)

/**
 * TextToSpeechControlsComponent interface extends FC<TextToSpeechControlsProps>
 * and includes a TTSButton property.
 * @interface TextToSpeechControlsComponent
 * @extends {FC<TextToSpeechControlsProps>}
 */
interface TextToSpeechControlsComponent extends FC<TextToSpeechControlsProps> {
  /** The TTSButton component used within TextToSpeechControls */
  TTSButton: typeof TTSButton
}

/**
 * TextToSpeechControls component provides a user interface for controlling text-to-speech functionality.
 * @param {TextToSpeechControlsProps} props - The component props
 * @returns {React.ReactElement} The rendered TextToSpeechControls component
 */
const TextToSpeechControls: TextToSpeechControlsComponent = ({
  label,
  isSpeaking,
  isPaused,
  onSpeak,
  onPause,
  onResume,
  onCancel,
}) => {
  const iconSize = 16

  return (
    <UI as="div" data-tts>
      {label && <p>{label}</p>}
      {!isSpeaking && (
        <TTSButton aria-label="Speak" onClick={onSpeak}>
          <Icon.PlaySolid size={iconSize} />
        </TTSButton>
      )}
      {isSpeaking && !isPaused && (
        <TTSButton aria-label="Pause" onClick={onPause}>
          <Icon.PauseSolid size={iconSize} />
        </TTSButton>
      )}
      {isPaused && (
        <TTSButton aria-label="Resume" onClick={onResume}>
          <Icon.ResumeSolid size={iconSize} />
        </TTSButton>
      )}
      <TTSButton aria-label="Stop" onClick={onCancel}>
        <Icon.StopSolid size={iconSize} />
      </TTSButton>
    </UI>
  )
}

TextToSpeechControls.displayName = 'TextToSpeechControls'
TextToSpeechControls.TTSButton = TTSButton

export default TextToSpeechControls

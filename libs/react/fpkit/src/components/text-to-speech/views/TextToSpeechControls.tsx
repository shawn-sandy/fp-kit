import React from 'react'
import Button from '#components/buttons/button'
import Icon from '#components/icons/icon'

interface TextToSpeechControlsProps {
  label?: string | React.ReactNode
  isSpeaking: boolean
  isPaused: boolean
  onSpeak: () => void
  onPause: () => void
  onResume: () => void
  onCancel: () => void
}

const TextToSpeechControls: React.FC<TextToSpeechControlsProps> = ({
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
    <div data-tts>
      {label && <p>{label}</p>}
      {!isSpeaking && (
        <Button
          aria-label="Speak"
          type="button"
          onClick={onSpeak}
          data-btn="sm text pill"
        >
          <Icon.Play size={iconSize} />
        </Button>
      )}
      {isSpeaking && !isPaused && (
        <Button
          aria-label="Pause"
          type="button"
          onClick={onPause}
          data-btn="sm text pill"
          focusable={isSpeaking && !isPaused}
        >
          <Icon.Pause size={iconSize} />
        </Button>
      )}
      {isPaused && (
        <Button
          aria-label="Resume"
          type="button"
          onClick={onResume}
          data-btn="sm text pill"
        >
          <Icon.Resume size={iconSize} />
        </Button>
      )}
      <Button
        aria-label="Stop"
        type="button"
        onClick={onCancel}
        data-btn="sm text pill"
      >
        <Icon.Stop size={iconSize} />
      </Button>
    </div>
  )
}

export default TextToSpeechControls

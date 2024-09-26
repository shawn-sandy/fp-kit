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
      <p>{label || 'Read content'}</p>
      <Button
        aria-label="Speak"
        type="button"
        onClick={onSpeak}
        disabled={isSpeaking}
        data-btn="sm text"
      >
        <Icon.Play size={iconSize} />
      </Button>
      <Button
        aria-label="Pause"
        type="button"
        onClick={onPause}
        disabled={!isSpeaking || isPaused}
        data-btn="sm text"
      >
        <Icon.Pause size={iconSize} />
      </Button>
      <Button
        aria-label="Resume"
        type="button"
        onClick={onResume}
        disabled={!isPaused}
        data-btn="sm text"
      >
        <Icon.Resume size={iconSize} />
      </Button>
      <Button
        aria-label="Stop"
        type="button"
        onClick={onCancel}
        disabled={!isSpeaking}
        data-btn="sm text"
      >
        <Icon.Stop size={iconSize} />
      </Button>
    </div>
  )
}

export default TextToSpeechControls

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

const TTSButtonComponent = ({
  children,
  onClick,
}: {
  children: React.ReactNode
  onClick: () => void
}) => {
  return (
    <button
      type="button"
      className="tts-border"
      data-btn="sm text pill"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export const TTSButton = React.memo(TTSButtonComponent)

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
    </div>
  )
}

export default TextToSpeechControls
TextToSpeechControls.displayName = 'TextToSpeechControls'
// TextToSpeechControls.Button = TTSButton

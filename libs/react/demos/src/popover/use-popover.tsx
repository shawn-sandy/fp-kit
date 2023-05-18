import { useState, useRef } from 'react'

type Position = {
  top: number
  left: number
}

const usePopover = (height: number) => {
  const [isVisible, setIsVisible] = useState(false)
  const [popoverPosition, setPopoverPosition] = useState<Position>({
    top: 0,
    left: 0,
  })
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event?.stopPropagation()
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      const { scrollY, scrollX, innerHeight, innerWidth } = window
      const popoverTop = rect.bottom + scrollY + 5
      const popoverLeft = rect.left + scrollX + 5
      const popoverBottom = popoverTop + height // Adjust the popover height as needed
      const popoverHeight = height // Adjust the popover height as needed

      let adjustedTop = popoverTop
      if (popoverBottom > scrollY + innerHeight) {
        adjustedTop = Math.max(
          scrollY + innerHeight - popoverHeight - 10,
          scrollY + 10,
        )
      }

      setPopoverPosition({
        top: adjustedTop,
        left: popoverLeft,
      })
      setIsVisible(true)
      console.log('clicked')
    }
  }

  const handleOutsideClick = () => {
    setIsVisible(false)
  }

  return {
    buttonRef,
    isVisible,
    popoverPosition,
    handleClick,
    handleOutsideClick,
  }
}

export default usePopover

import { useState } from 'react'

type Position = {
  top: number
  left: number
}

const usePopover = (
  elementRef: React.RefObject<HTMLElement>,
  height: number = 40,
  spacing: number = 0,
) => {
  const [isVisible, setIsVisible] = useState(false)
  const [popoverPosition, setPopoverPosition] = useState<Position>({
    top: 0,
    left: 0,
  })

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event?.stopPropagation()
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect()
      const { scrollY, scrollX, innerHeight, innerWidth } = window

      const popoverTop = rect.bottom + scrollY + spacing
      const popoverLeft = rect.left + scrollX
      const popoverBottom = popoverTop + height // Adjust the popover height as needed
      const popoverHeight = height // Adjust the popover height as needed

      const adjustedTop =
        popoverBottom > scrollY + innerHeight
          ? Math.max(
              scrollY + innerHeight - popoverHeight - height / 1.6,
              scrollY,
            ) -
            height -
            spacing
          : popoverTop

      console.log({ adjustedTop })

      setPopoverPosition({
        top: adjustedTop,
        left: popoverLeft,
      })
      setIsVisible(true)
    }
  }

  const handleOutsideClick = () => {
    setIsVisible(false)
  }

  return {
    isVisible,
    popoverPosition,
    handleClick,
    handleOutsideClick,
  }
}

export default usePopover

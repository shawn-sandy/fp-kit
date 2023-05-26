import { useState } from 'react'

type Position = {
  top: number
  left: number
}

const usePopover = (
  height: number,
  elementRef: React.RefObject<HTMLElement>,
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

      const popoverTop = rect.bottom + scrollY + 2
      const popoverLeft = rect.left + scrollX
      const popoverBottom = popoverTop + height // Adjust the popover height as needed
      const popoverHeight = height // Adjust the popover height as needed

      const adjustedTop =
        popoverBottom > scrollY + innerHeight
          ? Math.max(scrollY + innerHeight - popoverHeight - height, scrollY) -
            height -
            -8
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
    buttonRef: elementRef,
    isVisible,
    popoverPosition,
    handleClick,
    handleOutsideClick,
  }
}

export default usePopover

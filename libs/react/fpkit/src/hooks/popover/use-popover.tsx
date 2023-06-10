import { useState } from 'react'

type Position = {
  top: number
  left: number
}

/**
 *  A hook that returns the position of the popover and a function to toggle the popover
 * @param elementRef  The element that will trigger the popover
 * @param hoverRef  The element that will be the popover
 * @param spacing  The spacing between the popover and the element
 * @returns  An object with the following properties:
 */
export const usePopover = (
  elementRef: React.RefObject<HTMLElement>,
  hoverRef: React.RefObject<HTMLElement>,
  spacing = 1,
) => {
  const [isVisible, setIsVisible] = useState(false)
  const [popoverPosition, setPopoverPosition] = useState<Position>({
    top: 0,
    left: 0,
  })

  const handlePointerEvent = (event: React.MouseEvent<HTMLButtonElement>) => {
    event?.stopPropagation()
    const height = elementRef.current?.offsetHeight || 40
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect()
      const { scrollY, scrollX, innerHeight } = window

      const popoverTop = rect.bottom + scrollY + spacing
      const popoverLeft = rect.left + scrollX
      const popoverBottom = popoverTop + height // Adjust the popover height as needed
      const popoverHeight = hoverRef.current?.offsetHeight ?? height // Adjust the popover height as needed

      const adjustedTop =
        popoverBottom > scrollY + innerHeight
          ? Math.max(
              scrollY + innerHeight - popoverHeight - height - spacing,
              scrollY,
            ) -
            height -
            spacing
          : popoverTop

      setPopoverPosition({
        top: adjustedTop,
        left: popoverLeft,
      })
      setIsVisible(true)
    }
  }

  const handlePointerLeave = () => {
    setIsVisible(false)
  }

  return {
    isVisible,
    popoverPosition,
    handlePointerEvent,
    handlePointerLeave,
  }
}

export default usePopover

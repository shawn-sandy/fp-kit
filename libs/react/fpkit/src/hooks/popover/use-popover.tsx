import { useState } from 'react'

type Position = {
  /**
   * @description This is the top position of the popover.
   * @default 0
   */
  top: number
  /**
   * @description This is the left position of the popover.
   * @default 0
   */
  left: number
}

/**
 * @description This is the hook to show/hide the popover.
 * @param elementRef - This is the ref of the element on which the popover should be shown.
 * @param hoverRef - This is the ref of the element on which the popover should be shown.
 * @param spacing - This is the spacing between the element and the popover.
 * @example - const { isVisible, popoverPosition, handlePointerEvent, handlePointerLeave } = usePopover(hoverRef, popOverRef, 1)
 * @returns - This is the object of the following properties.
 * @returns - isVisible - This is the boolean value to show/hide the popover.
 * @returns - popoverPosition - This is the position of the popover.
 * @returns - handlePointerEvent - This is the function to handle the pointer event.
 * @returns - handlePointerLeave - This is the function to handle the pointer leave event.
 */
export const usePopover = (
  elementRef: React.RefObject<HTMLElement | HTMLDivElement>,
  hoverRef: React.RefObject<HTMLElement | HTMLDivElement>,
  spacing = 1,
) => {
  const [isVisible, setIsVisible] = useState(false)
  const [popoverPosition, setPopoverPosition] = useState<Position>({
    top: 0,
    left: 0,
  })

  const handlePointerEvent = (
    event: React.MouseEvent<HTMLButtonElement | HTMLElement>,
  ) => {
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

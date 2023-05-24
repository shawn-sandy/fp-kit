import { useState, useRef, RefObject } from 'react'

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
  // const buttonRef: DivButtonSpanRef = useRef(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event?.stopPropagation()
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect()
      const { scrollY, scrollX, innerHeight, innerWidth } = window
      // console.log({ scrollY, scrollX, innerHeight, innerWidth })

      const popoverTop = rect.bottom + scrollY + 5
      const popoverLeft = rect.left + scrollX + 5
      const popoverBottom = popoverTop + height // Adjust the popover height as needed
      const popoverHeight = height // Adjust the popover height as needed

      let adjustedTop = popoverTop
      // if (popoverBottom > scrollY + innerHeight) {
      //   adjustedTop = Math.max(
      //     scrollY + innerHeight - popoverHeight - height,
      //     scrollY + height,
      //   )
      // }

      if (popoverBottom > scrollY + innerHeight) {
        adjustedTop =
          Math.max(
            scrollY + innerHeight - popoverHeight - height,
            scrollY + height,
          ) - height
      }

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

import { useEffect, useState } from 'react'

/**
 * Use arrow keys to navigate a list
 * @param itemCount
 * @param sectionRef
 * @returns
 */
const useArrowNavigation = (
  /**
   * The number of items in the list
   */
  itemCount: number,
  /**
   * The ref of the section that contains the list
   * @example const sectionRef = useRef<HTMLUListElement>(null)
   * @example const currentSelection = useArrowNavigation(7, sectionRef)
   * @example <ul ref={sectionRef} tabIndex={0}>
   */
  sectionRef:
    | React.RefObject<HTMLElement>
    | React.RefObject<HTMLDivElement>
    | React.RefObject<HTMLUListElement>,
) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (
        !sectionRef.current ||
        sectionRef.current !== document.activeElement
      ) {
        return
      }

      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        setCurrentIndex((prevState) => (prevState + 1) % itemCount)
      } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        setCurrentIndex((prevState) => (prevState - 1 + itemCount) % itemCount)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [itemCount, sectionRef])

  return currentIndex
}

export default useArrowNavigation

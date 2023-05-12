import { useEffect, useState } from 'react'

function useArrowNavigation<T extends HTMLElement>(
  items: T[],
): [number, React.Dispatch<React.SetStateAction<number>>] {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'ArrowUp' && activeIndex > 0) {
        // Up arrow
        setActiveIndex(activeIndex - 1)
      } else if (e.key === 'ArrowDown' && activeIndex < items.length - 1) {
        // Down arrow
        setActiveIndex(activeIndex + 1)
      }
    }

    // Add event listener for arrow keys
    document.addEventListener('keydown', handleKeyDown)

    // Clean up event listener on unmount
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeIndex, items])

  return [activeIndex, setActiveIndex]
}

export default useArrowNavigation

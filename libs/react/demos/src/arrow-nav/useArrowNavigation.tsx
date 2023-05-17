import { useEffect, useState } from 'react'

const useArrowNavigation = (itemCount: number) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown') {
        setCurrentIndex((prevState) => (prevState + 1) % itemCount)
      } else if (event.key === 'ArrowUp') {
        setCurrentIndex((prevState) => (prevState - 1 + itemCount) % itemCount)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [itemCount])

  return currentIndex
}

export default useArrowNavigation

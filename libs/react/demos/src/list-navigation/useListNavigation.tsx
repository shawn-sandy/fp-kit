import React from 'react'

export function useListNavigation(items: string[]) {
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  function handleKeyDown(event: KeyboardEvent) {
    // console.log(event.key, 'key')

    if (event.key === 'ArrowUp' && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1) // Up arrow key
    } else if (event.key === 'ArrowDown' && selectedIndex < items.length - 1) {
      setSelectedIndex(selectedIndex + 1) // Down arrow key
      console.log(event.key, 'down')
    }
  }

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedIndex, items.length])

  return {
    selectedIndex,
  }
}

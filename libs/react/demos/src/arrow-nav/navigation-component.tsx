import React, { useRef } from 'react'
import './MyComponent.css' // Import your css file
import useArrowNavigation from './useArrowNavigation'

/**
 * Example arrow navigation component
 * @returns
 */
const NavigationComponent: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const currentSelection = useArrowNavigation(7, sectionRef)

  const handleOnKeyDownEvent = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      console.log('Enter key pressed')
    }
  }

  return (
    <section ref={sectionRef} tabIndex={0}>
      {Array.from({ length: 7 }, (_, index) => (
        <div
          key={index}
          className={currentSelection === index ? 'selected' : ''}
          onClick={() => {
            console.log('clicked')
          }}
          onKeyUp={handleOnKeyDownEvent}
        >
          {`Element ${index + 1}`}
        </div>
      ))}
    </section>
  )
}

export default NavigationComponent

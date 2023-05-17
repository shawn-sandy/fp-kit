import React, { useRef } from 'react'
import './MyComponent.css' // Import your css file
import useArrowNavigation from './useArrowNavigation'

/**
 * Example arrow navigation component
 * @returns
 */
const NavigationComponent: React.FC = () => {
  const sectionRef = useRef<HTMLUListElement>(null)
  const currentSelection = useArrowNavigation(7, sectionRef)

  return (
    <ul ref={sectionRef} tabIndex={0}>
      {Array.from({ length: 7 }, (_, index) => (
        <li
          key={index}
          className={currentSelection === index ? 'selected' : ''}
          onClick={() => {
            console.log('clicked')
          }}
        >
          {`Element ${index + 1}`}
        </li>
      ))}
    </ul>
  )
}

export default NavigationComponent

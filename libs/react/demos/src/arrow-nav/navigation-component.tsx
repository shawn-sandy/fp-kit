import React from 'react'
import './MyComponent.css' // Import your css file
import useArrowNavigation from './useArrowNavigation'

const NavigationComponent: React.FC = () => {
  const currentSelection = useArrowNavigation(7)

  return (
    <section>
      <ul>
        {Array.from({ length: 7 }, (_, index) => (
          <li
            key={index}
            className={currentSelection === index ? 'selected' : ''}
          >
            {`Element ${index + 1}`}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default NavigationComponent

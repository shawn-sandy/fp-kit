import { useRef } from 'react'
import useArrowNavigation from './useArrowNavigation'

function ElementNav() {
  const parentRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<(HTMLDivElement | HTMLButtonElement | null)[]>([null])
  const [activeIndex, setActiveIndex] = useArrowNavigation(
    itemsRef.current.filter((item) => item !== null) as HTMLDivElement[],
  )
  const items = ['Item 1', 'Item 2', 'Item 3']
  return (
    <div ref={parentRef} tabIndex={0}>
      {items.map((item, index) => (
        <button
          key={index}
          ref={(el) => (itemsRef.current[index] = el)}
          className={activeIndex === index ? 'active selected' : ''}
          onClick={() => setActiveIndex(index)}
          style={{ display: 'block', width: '100%' }}
        >
          {item}
        </button>
      ))}
    </div>
  )
}

export default ElementNav

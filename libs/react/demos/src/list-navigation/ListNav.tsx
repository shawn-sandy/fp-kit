import React, { useState, useEffect } from 'react'
import { useListNavigation } from './useListNavigation'

interface ListNavigationProps {
  items: string[]
}

function ListNavigation({ items }: ListNavigationProps) {
  const selectedIndex = useListNavigation(items)
  console.log(selectedIndex, 'selectedIndex')

  // eslint-disable-next-line complexity

  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={index}
          className={index === selectedIndex.selectedIndex ? 'selected' : ''}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

export default ListNavigation

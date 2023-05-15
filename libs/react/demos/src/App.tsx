import { useState } from 'react'
import React from 'react'

import '@shawnsandy/first-paint/dist/css/libs/all.min.css'
import './App.css'
// import ListNavigation from './list-navigation/ListNav'
import ElementNav from './arrow-nav/ElementNav'
import { MultipleSelectExample } from './down-shift/down-shift'
import { MultipleCombo } from './down-shift/multibox-combo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>
        {/* <ListNavigation items={['Item 1', 'Item 2', 'Item 3', 'Item 4']} /> */}
      </p>
      <div className="divider">
        <span>A</span>
        <hr />
      </div>
      <p>
        {/* <MultipleSelectExample /> */}
        <MultipleCombo />
      </p>
    </>
  )
}

export default App

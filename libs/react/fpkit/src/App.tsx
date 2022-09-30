import React, { useState } from 'react'
import './App.css'

import FPBadge from './components/badge/fp-badge'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <p>
          <FPBadge elm="span" role='note'>Badge</FPBadge>
        </p>
      </header>
    </div>
  )
}

export default App

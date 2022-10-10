import React, { useState } from 'react'
import './App.css'

import FPBadge from './components/badge/fp-badge'
import {Box } from './components/fp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <p>
          <FPBadge elm="span" role='note'>Badge</FPBadge>
        </p>
        <Box as='section'>
          <FPBadge elm="span" role='note'>Badge</FPBadge>
        </Box>
      </header>
    </div>
  )
}

export default App

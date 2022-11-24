import React, { useState } from 'react'
import './App.css'

import { Badge } from './components/badge/fp-badge'
import { Box } from './index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <p>
          <Badge elm="span" role="note">
            Badge
          </Badge>
        </p>
        <Box as="section">
          <Badge elm="span" role="note">
            Badge
          </Badge>
        </Box>
      </header>
    </div>
  )
}

export default App

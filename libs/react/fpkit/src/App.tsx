import React, { useState } from 'react'
import './App.css'

import { Badge } from './components/badge/fp-badge'
import { Box } from './index'
import { Button } from './components/buttons/button'

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
        <Box as="section">
          <p>
            <Button type="button">Button</Button>
          </p>
        </Box>
      </header>
    </div>
  )
}

export default App

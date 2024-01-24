import React, { useState } from 'react'
import './App.css'

import { Tag } from './components/tag/tag'
import { Box } from './index'
import { Button } from './components/buttons/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <p>
          <Tag elm="span" role="note">
            Badge
          </Tag>
        </p>
        <Box as="section">
          <Tag elm="span" role="note">
            Badge
          </Tag>
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

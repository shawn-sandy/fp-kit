import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import Badge from './component/badge'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <p>Display a simple badge component <Badge as="span" role='note'>Badge</Badge>
        </p>
      </header>
    </div>
  )
}

export default App

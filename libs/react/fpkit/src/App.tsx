import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import FPBadge from './component/badge/fp-badge'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <FPBadge element="span" role='note'>Badge</FPBadge>
        </p>
      </header>
    </div>
  )
}

export default App

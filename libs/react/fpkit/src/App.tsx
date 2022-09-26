import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import FpBadge from './component/badge/fp-badge'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <FpBadge element="span" role='note'>Badge</FpBadge>
        </p>
      </header>
    </div>
  )
}

export default App

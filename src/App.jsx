import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Header></Header>
      <h1>Hello word</h1>
    
    </div>
  )
}

export default App

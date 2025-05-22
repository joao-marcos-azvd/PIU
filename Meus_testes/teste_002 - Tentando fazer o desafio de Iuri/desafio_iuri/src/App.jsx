import { useState } from 'react'
import './App.css'
import Mudar_tema from './components/Mudar_tema'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Mudar_tema />
    </>
  )
}

export default App

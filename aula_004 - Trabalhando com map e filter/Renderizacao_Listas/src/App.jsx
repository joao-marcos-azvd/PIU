import { useState } from 'react'
import reactLogo from './assets/react.svg'
import DropDown from './components/DropDown'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DropDown />
    </>
  )
}

export default App

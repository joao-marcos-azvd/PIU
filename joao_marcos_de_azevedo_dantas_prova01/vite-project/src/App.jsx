// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import RenderizarCarros from './components/RenderizarCarros'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RenderizarCarros/>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import './Components/Header/Header';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Shop></Shop>
    </>
  )
}

export default App

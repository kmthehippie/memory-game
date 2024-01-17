import { useState } from 'react'

import './App.css'
import Card from './Card'
import CardsRender from './CardsRender'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1> Memory Game </h1>
     <CardsRender />
      
    </>
  )
}

export default App

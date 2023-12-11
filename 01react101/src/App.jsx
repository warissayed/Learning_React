import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  const [count, setcount] = useState(12);

  const addValue = ()=>{
    if (count === 20) {
      setcount(count)
    } else {
      setcount(count => count+1)
      setcount(count => count+1)
      setcount(count => count+1)
    }
  }

  const removeValue = ()=>{
    if (count === 0) {
      setcount(count)
    } else {
      setcount(count -1)
    }
  }


  return (
    <>
      <h1>React add and remove counter</h1>
      <h2>current counter:{count}</h2>
      <button onClick={addValue}>Add counter </button>
      <button onClick={removeValue}>Remove Counter</button>
    </>
  )
}

export default App

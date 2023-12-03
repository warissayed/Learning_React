import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [counter,setCounter] =  useState(15)


const addValue = ()=>{
  if (counter === 20) {
    setCounter(counter)
  }else{
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    
  }
}
const removeValue = ()=>{
  
  if (counter === 0) {
    setCounter(counter)
  }else{
    setCounter(counter-1)
  }
}

  return (
    <>
     <h1>Chai aur react</h1>
     <h3>Counter value:{counter}</h3>
     <button onClick={addValue}>Add Value</button> 
     <br />
     <button onClick={removeValue}>remove Value</button>
    </>
  )
}

export default App

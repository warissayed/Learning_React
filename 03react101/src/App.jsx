import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState(0)

  return (
    <>
      <div className=' w-full h-screen duration-200'style={{backgroundColor:color}}>
        <div className=' fixed flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className=' fixed flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
            <button onClick={()=> setcolor("red")} className=' bg-black text-white rounded-md'>Test</button>
            <button onClick={()=> setcolor("green")} className=' bg-black text-white rounded-md'>Test</button>
            <button onClick={()=> setcolor("blue")} className=' bg-black text-white rounded-md'>Test</button>
            <button onClick={()=> setcolor("yellow")} className=' bg-black text-white rounded-md'>Test</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

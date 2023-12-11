import { useState,useCallback , useEffect , useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [length, setlength] = useState(6)
  const [numberAllowed ,setNumberAllowed] = useState(false)
  const [charAllowed ,setCharAllowed] = useState(false)
  const [passowrd , setpassword] = useState("")
  const [copy , copyed] = useState("copy")

  const passowrdreff = useRef(null)

  const passowrdGenerator = useCallback(()=>{
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if (numberAllowed) str+= "1234567890"
      if (charAllowed) str += "!@#$%^&*_+={}[]~`"

      for (let i = 0; i <=length; i++) {
          let char = Math.floor(Math.random() * str.length + 1)
          pass += str.charAt(char)
          
      }
      setpassword(pass)


  } , [length, charAllowed,numberAllowed , setpassword])
  const copyPasswordClipBord = useCallback(()=>{
    copyed("Copied")
    passowrdreff.current?.select()
    fpassowrdreff.current?.setSelectionRange(0,50);
    window.navigator.clipboard.writeText(passowrd)
  },[passowrd])

  useEffect(()=>{
    
    copyed("copy")
    passowrdGenerator()
  },[length,numberAllowed,charAllowed,passowrdGenerator])

 

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-500'>

      <h1 className=' text-white text-center my-3'>passowrd Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>

        <input
           type="text"
           value={passowrd} 
           className=' outline-none w-full py-1 px-3' 
           placeholder='password'
           readOnly
           ref={passowrdreff}
        />
        <button 
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        onClick={copyPasswordClipBord }
       
        
        >{copy}</button>

      </div>
      <div
      className=' flex text-sm gap-x-2'>
        <div className=' flex items-center gap-x-1'>
         <input 
         type="range" 
         value={length}
         min={6}
         max={100}
         className='cursor-pointer'
         onChange={(e)=>{setlength(e.target.value)}}
         
          />
          <label >Length:{length}</label>

        </div>
        <div className='felx items-center gap-x-1'>
          
          <input 
          type="checkbox"
           defaultChecked={numberAllowed}
           id="numberInput"
           onChange={()=>{
            setNumberAllowed((prev) => !prev);
           }} 
           />
            <label htmlFor="characterInput">Characters</label>
        </div>
        <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox" 
              defaultChecked= {charAllowed}
              id="charecterInput"
              onChange={()=>{setCharAllowed((prev)=>!prev)}} />
              <label htmlFor="carecterInput">Carecter</label>
              
             </div>
      </div>
     </div>
    </>
  )
}

export default App

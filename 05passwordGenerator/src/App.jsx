import { useState, useCallback,useEffect,useRef } from 'react'



function App() {
  const [length , setlengeh] = useState(8);
  const [numberAdd , setNumberAdd] = useState(false);
  const [carecterAllow , setCarecterAllow] = useState(false)
  const [password , setPassword] = useState("");

  //use ref hook
  const passwordreff = useRef(null)
 
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAdd) str += "0123456789"
    if (carecterAllow) str += "!@#$%^&*_+=[]{}~`"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
     }
     setPassword(pass)

  },[length,numberAdd,carecterAllow,setPassword] )

  const copyPasswordToClip = useCallback(()=>{
    passwordreff.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAdd,carecterAllow,passwordGenerator])
  return (
    <>
   <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-slate-800 '>
            <h1 className=' text-white text-center my-3'>Password Generator</h1>

            <div className=' flex shadow rounded-lg overflow-hidden mb-4'>
              <input 
              type="text"
              value={password}
              className=' outline-none w-full py-1 px-3'
              placeholder='password'
              readOnly
              ref={passwordreff}
               />
               <button 
               onClick={copyPasswordToClip} 
               className=' outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
            </div>

      <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
               <input 
               type="range"
               min={6}
               max={100}
               value={length}
               className='cursor-pointer'
               onChange={(e)=>{setlengeh(e.target.value)}}
               />
               <label > length: {length}</label>

               <div className='flex items-center gap-x-1'>
                <input 
                type="checkbox"
                defaultChecked={numberAdd}
                id="numberInput" 
                onChange={()=>{setNumberAdd((prev)=>!prev)}}
                />
                <label htmlFor="numberInput">Numbers</label>

             </div>
             <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox" 
              defaultChecked= {carecterAllow}
              id="charecterInput"
              onChange={()=>{setCarecterAllow((prev)=>!prev)}} />
              <label htmlFor="carecterInput">Carecter</label>
              
             </div>
 
         
        
            </div>
          </div>
    </div>
    </>
  )
}

export default App

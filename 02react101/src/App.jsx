import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Components/card'


function App() {
 

  


  return (
    <>
      <h1 className=' text-center  text-blue-900 text-5xl'>The Following are the headers</h1>
      <Card username={"waris"} jobtitle={"bla bla bla"} image={"https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
      <Card username={"arshad"} jobtitle={"bla bla bla2"} image={"https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
      <Card username={"waris"} jobtitle={"bla bla bla3"} image={"https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>

    </>
  )
}

export default App

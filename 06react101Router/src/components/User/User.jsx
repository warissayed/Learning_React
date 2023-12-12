import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid} = useParams()
  
  return (
    <>
    <div>User:{userid}</div>
    <h1 className=' text-orange-700 bg-black'>This is your user-Id {userid}</h1>
    
    </>
    

  )
}

export default User
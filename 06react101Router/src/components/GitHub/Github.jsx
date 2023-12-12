import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  // const [data , setdata]= useState([])
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/hiteshchoudhary')
  //   .then(data => data.json())
  //   .then(data =>{
  //     console.log(data);
  //     setdata(data)
  //   })
  // },[])

  return (
    <>
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers:{data.followers}
    </div>
    <div className=' flex justify-center items-center'><img  src={data.avatar_url}  /></div>
    
    </>
    

  )
}

export default Github

export const githubInfo = async() => {
  const response = await fetch('https://api.github.com/users/hiteshchoudhary')
  return response.json()
}
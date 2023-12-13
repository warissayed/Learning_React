import React,{useContext} from 'react'
import UserContext from '../context/userContext'

function Profile() {
  const {user} = useContext(UserContext)
  if (!user) return <div>Please Login</div>

  return <div>Welcome {user.username} <div>Your password is {user.password}</div></div>
  
  
}

export default Profile
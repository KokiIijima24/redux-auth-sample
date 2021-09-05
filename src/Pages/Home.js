import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Home() {
  const user_info = useSelector((state) => state.auth)
  
  if (!user_info.isLogin) {
    return <div>test</div>
  }
  
  const email = user_info.user.email

  return (
    <div>
      <h1>test</h1>
      <h1>{email}</h1>
      <h1>Home</h1>
    </div>
  )
}

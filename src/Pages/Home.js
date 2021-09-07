import React from 'react'
import { useSelector } from 'react-redux'
import { baseRepository } from '../api/auth'
import { isAuthSelector } from '../store/auth'

export default function Home() {
  //const user_info = useSelector((state) => state.user)
  const isAuth = useSelector(isAuthSelector);

  if (!isAuth) {
    console.log(isAuthSelector)
    return <div>test</div>
  }

  baseRepository
    .get('weatherforecast')
    .then((response) => console.log(response))

  return (
    <div>
      <h1>test</h1>
      <h1>Home</h1>
    </div>
  )
}

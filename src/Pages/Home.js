import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { baseRepository } from '../api/auth'
import { isAuthSelector } from '../store/auth'

const Home = () => {
  //const user_info = useSelector((state) => state.user)
  const isAuth = useSelector(isAuthSelector)
  const [users, setUsers] = useState([])

  if (!isAuth) {
    return <div>test</div>
  }

  useEffect(() => {
    baseRepository.get('api/user/list').then((response) => {
      setUsers(response.data)
    })
  }, [])

  console.log('users:', users)

  return (
    <div>
      <h1>Home</h1>
      <h3>ユーザーリスト</h3>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.displayName}</li>
        })}
      </ul>
    </div>
  )
}

export default Home

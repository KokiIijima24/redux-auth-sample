import React from 'react'
import { useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'
import { logout } from '../store/auth'

function HeaderMenu() {
  const dispatch = useDispatch()

  const signout = async () => {
    await dispatch(logout())
  }

  return (
    <nav>
      <Link to='/'>Home</Link> | <Link to='/login'>Login</Link> |{' '}
      <Link to='/mypage'>MyPage</Link>
      <button onClick={(e) => signout(e)}>Logout</button>
    </nav>
  )
}

export default HeaderMenu

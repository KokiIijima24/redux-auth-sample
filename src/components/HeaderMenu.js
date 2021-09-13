import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import { logout } from '../store/auth'

function HeaderMenu() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth.user)

  const signout = async () => {
    await dispatch(logout())
  }

  return (
    <nav>
      <Link to='/'>Home</Link> | <Link to='/login'>Login</Link> |{' '}
      <Link to='/mypage'>MyPage</Link>
      <button onClick={(e) => signout(e)}>Logout</button>
      <Link>{user.displayName}</Link>
    </nav>
  )
}

export default HeaderMenu

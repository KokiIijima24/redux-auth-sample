import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../store/auth'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()
  const dispatch = useDispatch()

  const submit = async () => {
    await dispatch(login(username, password))
    history.push('/mypage')
  }

  return (
    <div class='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col'>
      <form onSubmit={submit}>
        <div class='mb-4'>
          <label
            class='block text-grey-darker text-sm font-bold mb-2'
            for='username'
          >
            Username
          </label>
          <input
            class='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker'
            id='username'
            type='text'
            placeholder='Username'
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div class='mb-6'>
          <label
            class='block text-grey-darker text-sm font-bold mb-2'
            for='password'
          >
            Password
          </label>
          <input
            class='shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3'
            id='password'
            type='password'
            placeholder='******************'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p class='text-red text-xs italic'>Please choose a password.</p>
        </div>
        <div class='flex items-center justify-between'>
          <button
            class='bg-blue-600 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded'
            type='submit'
          >
            Sign In
          </button>
          <a
            class='inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker hidden'
            href='#'
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  )
}

export default Login

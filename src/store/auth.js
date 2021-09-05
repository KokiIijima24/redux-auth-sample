import { createSlice } from '@reduxjs/toolkit'
import { login as loginApi } from '../api/auth'

const initialState = {
  user: null, // ユーザー情報の格納場所
  isLogin: false,
}

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      return Object.assign({}, state, { user: action.payload, isLogin: true })
    },
    signOut: (state, action) => {
      return Object.assign({}, state, { user: null, isLogin: false })
    },
  },
})

export default slice.reducer

// 認証済みか確認するセレクター
export const isAuthSelector = (state) => state.auth.user !== null

// ログイン機能
export function login(username, password) {
  return async function (dispatch) {
    const user = await loginApi(username, password)
    console.log('set user:', user)
    // ログイン後にユーザー情報をストアに格納する
    dispatch(slice.actions.setUser(user))
  }
}

// サインアウト
export function signout() {
  return async function (dispatch) {
    dispatch(slice.action.signOut())
  }
}

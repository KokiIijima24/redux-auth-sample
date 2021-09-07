import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import store, { persistor } from './store/'
import PrivateRoute from './components/PrivateRoute'
import GuestRoute from './components/GuestRoute'

import HeaderMenu from './components/HeaderMenu'
import Home from './Pages/Home'
import Login from './Pages/Login'
import MyPage from './Pages/MyPage'


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <HeaderMenu />
          <Switch>
            <Route path='/' exact children={<Home />} />
            <GuestRoute path='/login' children={<Login />} />
            <PrivateRoute path='/mypage' children={<MyPage />} />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App

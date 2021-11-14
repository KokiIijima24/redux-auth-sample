import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import store, { persistor } from './store/'
import PrivateRoute from './components/Router/PrivateRoute'
import GuestRoute from './components/Router/GuestRoute'
import AppRoute from './components/Router/AppRoute'

import Home from './Pages/Home'
import Login from './Pages/Login'
import MyPage from './Pages/MyPage'

import LoginLayout from './Layout/LoginLayout'
import MainLayout from './Layout/MainLayout'
import Chapter3 from './Pages/Chapter3'


　　　　　　　　　　　　　　　　　　　　　
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Switch>
            <AppRoute path='/' exact layout={MainLayout} component={Home} />
            <GuestRoute path='/login' layout={LoginLayout} component={Login} />
            <PrivateRoute path='/mypage' layout={MainLayout} component={MyPage} />
            <GuestRoute path='/chapter3' layout={MainLayout} component={Chapter3} />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App

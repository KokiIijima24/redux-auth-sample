import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { isAuthSelector } from '../store/auth'

const GuestRoute = ({ component: Component, layout: Layout, ...rest }) => {
  const isAuth = useSelector(isAuthSelector)

  return isAuth ? (
    <Redirect to='/' />
  ) : (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  )
}

export default GuestRoute

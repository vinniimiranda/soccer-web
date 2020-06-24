import React from 'react'

import { Route } from 'react-router-dom'



import Nav from '../components/Nav'

const Layout = ({ children }) => (
  <div className="container">
    <Nav />
    {children}
  </div>
)


export default function RouteWrapper ({ component: Component, isPrivate = false, ...rest }) {


  return (
    <Route
      {...rest}
      component={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  )
}
import React from 'react'
import './config/ReactotronConfig'

import Routes from './routes/index'
import { Router } from 'react-router'

import history from './services/history'

import GlobalStyles from './styles/global'
import './App.css'

function App () {
  return (

    <Router history={history}>
      <Routes />
      <GlobalStyles />
    </Router>

  )
}

export default App

import React from 'react'
import { Routes } from './Routes'
import { AppBar } from '../Navigation/AppBar'

import './App.scss'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <AppBar />
        <Routes />
      </div>
    )
  }
}

export default App

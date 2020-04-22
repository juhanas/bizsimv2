import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from '../Home'
import { About } from '../About'
import Login from '../Auth/Login'
import Games from '../Games/Games'
import { NotFound } from '../NotFound'

export const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" exact component={About} />
    <Route path="/login" exact component={Login} />
    <Route path="/games" exact component={Games} />
    <Route component={NotFound} />
  </Switch>
)

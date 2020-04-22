import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import AppBarMaterial from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { LanguageSelector } from './LanguageSelector'

import './AppBarFull.scss'

export const AppBarFull = () => (
  <div className="app-bar-full">
    <AppBarMaterial position="static" className="app-bar-full__container">
      <Typography variant="h4" className="app-bar-full__title">
        <Link to="/">
          <FormattedMessage
            id="appBar.title"
            defaultMessage="BizSim"
            description="Name of the application"
          />
        </Link>
      </Typography>
      <Toolbar>
        <Typography variant="h6" className="app-bar-full__link">
          <Link to="/">
            <FormattedMessage
              id="appBar.navigation.home"
              defaultMessage="Home"
              description="Link to home page"
            />
          </Link>
        </Typography>
        <Typography variant="h6" className="app-bar-full__link">
          <Link to="/about">
            <FormattedMessage
              id="appBar.navigation.about"
              defaultMessage="About"
              description="Link to about page"
            />
          </Link>
        </Typography>
        <Typography variant="h6" className="app-bar-full__link">
          <Link to="/games">
            <FormattedMessage
              id="appBar.navigation.games"
              defaultMessage="Games"
              description="Link to games page"
            />
          </Link>
        </Typography>
        <Typography variant="h6" className="app-bar-full__link">
          <Link to="/login">
            <FormattedMessage
              id="appBar.navigation.login"
              defaultMessage="Login"
              description="Link to login page"
            />
          </Link>
        </Typography>
      </Toolbar>
      <LanguageSelector />
    </AppBarMaterial>
  </div>
)

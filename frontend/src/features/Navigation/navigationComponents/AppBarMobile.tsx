import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Slide from '@material-ui/core/Slide'
import { TransitionProps } from '@material-ui/core/transitions'

import { LanguageSelector } from './LanguageSelector'

import './AppBarMobile.scss'

export const AppBarMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(null)

  const handleMenu = (event: any) => {
    setIsMenuOpen(isMenuOpen != null ? null : event.currentTarget)
  }

  const handleMenuClose = () => {
    setIsMenuOpen(null)
  }

  const SlideTransition = React.forwardRef(
    (
      props: TransitionProps & { children?: React.ReactElement<any, any> },
      ref: React.Ref<unknown>,
    ) => <Slide direction="down" ref={ref} {...props} />,
  )

  return (
    <div className="app-bar-mobile">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className="app-bar-mobile__menu-button"
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            className="app-bar-mobile__menu-container"
            anchorEl={isMenuOpen}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            TransitionComponent={SlideTransition}
            open={Boolean(isMenuOpen)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>
              <Typography variant="h6" className="app-bar-mobile__link">
                <Link to="/">
                  <FormattedMessage
                    id="appBar.navigation.home"
                    defaultMessage="Home"
                    description="Link to home page"
                  />
                </Link>
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Typography variant="h6" className="app-bar-mobile__link">
                <Link to="/about">
                  <FormattedMessage
                    id="appBar.navigation.about"
                    defaultMessage="About"
                    description="Link to about page"
                  />
                </Link>
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Typography variant="h6" className="app-bar-mobile__link">
                <Link to="/login">
                  <FormattedMessage
                    id="appBar.navigation.login"
                    defaultMessage="Login"
                    description="Link to login page"
                  />
                </Link>
              </Typography>
            </MenuItem>
            <MenuItem>
              <LanguageSelector showTitle />
            </MenuItem>
          </Menu>
          <Typography variant="h6" className="app-bar-mobile__title">
            BizSim
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

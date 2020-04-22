import React from 'react'
import { FormattedMessage } from 'react-intl'

import Avatar from '@material-ui/core/Avatar'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import Typography from '@material-ui/core/Typography'

import './LoginSuccess.scss'

export const LoginSuccess = () => (
  <div className="login-success">
    <Avatar className="login-success__avatar">
      <LockOpenIcon />
    </Avatar>
    <Typography component="h1" variant="h5">
      <FormattedMessage
        id="login.loginSuccess.title"
        defaultMessage="Successfully signed in"
        description="Message displayed on Successful login page"
      />
    </Typography>
  </div>
)

import React from 'react'
import { FormattedMessage } from 'react-intl'

import Avatar from '@material-ui/core/Avatar'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'

import './LoginFormTitle.scss'

export const LoginFormTitle = () => (
  <div className="login-form-title">
    <Avatar className="login-form-title__avatar">
      <LockOutlinedIcon />
    </Avatar>
    <Typography component="h1" variant="h5">
      <FormattedMessage
        id="login.loginFormTitle.title"
        defaultMessage="Sign in"
        description="Title displayed on top of login form"
      />
    </Typography>
  </div>
)

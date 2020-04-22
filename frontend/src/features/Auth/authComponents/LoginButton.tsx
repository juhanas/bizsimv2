import React from 'react'
import { FormattedMessage } from 'react-intl'

import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

import './LoginButton.scss'

type LoginButtonProps = {
  loginUnderway: boolean;
}

export const LoginButton = ({ loginUnderway }: LoginButtonProps) => (
  <Button
    type="submit"
    fullWidth
    variant="contained"
    color="primary"
    className="login-button"
    disabled={loginUnderway}
  >
    {!loginUnderway && (
      <span>
        <FormattedMessage
          id="login.loginButton.text"
          defaultMessage="Sign in"
          description="Message displayed on login button"
        />
      </span>
    )}
    {loginUnderway && (
      <div className="login-button__login-underway__container">
        <span className="login-button__login-underway__text">
          <FormattedMessage
            id="login.loginButton.loginUnderwayText"
            defaultMessage="Signing in"
            description="Message displayed on login button when login process is underway"
          />
        </span>
        <CircularProgress size={20} />
      </div>
    )}
  </Button>
)

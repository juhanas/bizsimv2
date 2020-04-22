import React from 'react'
import { FormattedMessage } from 'react-intl'

import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'

export const LoginSecondaryActions = () => (
  <Grid container className="login-secondary-actions">
    <Grid item xs className="login-secondary-actions__forgot-password">
      <Link href="#" variant="body2">
        <FormattedMessage
          id="login.loginSecondaryActions.forgotPassword.text"
          defaultMessage="Forgot password"
          description="Message displayed on forgot password- link"
        />
        ?
      </Link>
    </Grid>
    <Grid item className="login-secondary-actions__signup">
      <Link href="#" variant="body2">
        <FormattedMessage
          id="login.loginSecondaryActions.noAccountYet.text"
          defaultMessage="Don't have an account? Sign up"
          description="Message displayed on no account yet/sign up- link"
        />
      </Link>
    </Grid>
  </Grid>
)

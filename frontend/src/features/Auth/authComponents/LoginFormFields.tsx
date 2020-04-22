import React from 'react'
import { useIntl, IntlShape } from 'react-intl'

import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'

import { LoginButton } from './LoginButton'
import { LoginFormProps, LoginError } from '../authTypes'

import './LoginFormFields.scss'

const getLoginError = (
  errorMessage: LoginError,
  changedInput: boolean,
  intl: IntlShape,
): string => (errorMessage != null && changedInput != null
  ? intl.formatMessage({
    id: 'login.loginFormFields.loginErrorText',
    defaultMessage: 'Incorrect username or password',
    description: 'Login form error message text',
  })
  : '')

export const LoginFormFields = ({
  username,
  password,
  changedInput,
  loginUnderway,
  rememberMe,
  handleUsernameChange,
  handlePasswordChange,
  handleSubmit,
  loginError,
}: LoginFormProps) => {
  const intl = useIntl()
  return (
    <form className="login-form-fields" noValidate onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="username"
        label={intl.formatMessage({
          id: 'login.loginFormFields.usernameText',
          defaultMessage: 'Username',
          description: 'Login form field label for username',
        })}
        name="username"
        autoComplete="username"
        autoFocus
        value={username}
        error={loginError != null && !changedInput}
        onChange={handleUsernameChange}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label={intl.formatMessage({
          id: 'login.loginFormFields.passwordText',
          defaultMessage: 'Password',
          description: 'Login form field label for password',
        })}
        type="password"
        id="password"
        autoComplete="current-password"
        value={password}
        error={loginError != null && !changedInput}
        helperText={getLoginError(loginError, changedInput, intl)}
        onChange={handlePasswordChange}
      />
      {false && (
        <FormControlLabel
          control={<Checkbox value={rememberMe} color="primary" />}
          label={intl.formatMessage({
            id: 'login.loginFormFields.rememberMeText',
            defaultMessage: 'Remember me',
            description: 'Login form field label for remember me- selection',
          })}
          className="login-form-fields__remember-me"
        />
      )}
      <LoginButton loginUnderway={loginUnderway} />
    </form>
  )
}

import React from 'react'

import { LoginFormTitle } from './LoginFormTitle'
import { LoginFormFields } from './LoginFormFields'
import { LoginSecondaryActions } from './LoginSecondaryActions'

import { LoginFormProps } from '../authTypes'

export const LoginForm = (props: LoginFormProps) => (
  <div className="login-form">
    <LoginFormTitle />
    <LoginFormFields {...props} />
    {true && <LoginSecondaryActions />}
  </div>
)

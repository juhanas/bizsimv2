import React, { Component, FormEvent } from 'react'
import { connect } from 'react-redux'

import Container from '@material-ui/core/Container'
import { LoginForm } from './authComponents/LoginForm'
import { LoginSuccess } from './authComponents/LoginSuccess'

import { RootState } from '../../store/rootReducer'
import { login } from './authThunks'
import { setUsername, setPassword } from './authSlice'
import { LoginDetails, LoginError } from './authTypes'

import './Login.scss'

type LoginProps = {
  username: string;
  password: string;
  loginUnderway: boolean;
  loginDetails: LoginDetails;
  loginError: LoginError;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
  login: (username: string, password: string) => void;
}

type LoginState = {
  username: string;
  password: string;
  rememberMe: boolean;
  changedInput: boolean;
}

class Login extends Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props)
    this.state = {
      username: '',
      password: '',
      rememberMe: false,
      changedInput: true,
    }
  }

  handleUsernameChange = (event: any) => {
    this.setState({
      username: event.target.value,
      changedInput: true,
    })
  }

  handlePasswordChange = (event: any) => {
    this.setState({
      password: event.target.value,
      changedInput: true,
    })
  }

  handleRememberMeChange = (event: any) => {
    this.setState((_: LoginState) => ({
      rememberMe: event.target.value,
    }))
  }

  handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    const { username, password } = this.state
    const { login: loginThunk } = this.props
    event.preventDefault()
    loginThunk(username, password)
    this.setState({ changedInput: false })
  }

  render = () => {
    const {
      username, password, changedInput, rememberMe,
    } = this.state
    const { loginUnderway, loginDetails, loginError } = this.props

    return (
      <Container component="main" maxWidth="xs" className="login">
        {loginDetails != null && <LoginSuccess />}
        {loginDetails == null && (
          <LoginForm
            username={username}
            password={password}
            changedInput={changedInput}
            rememberMe={rememberMe}
            loginUnderway={loginUnderway}
            loginError={loginError}
            handleUsernameChange={this.handleUsernameChange}
            handlePasswordChange={this.handlePasswordChange}
            handleSubmit={this.handleSubmit}
          />
        )}
      </Container>
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  username: state.auth.username,
  password: state.auth.password,
  loginUnderway: state.auth.loginUnderway,
  loginDetails: state.auth.loginDetails,
  loginError: state.auth.loginError,
})

const mapDispatchToProps = {
  setUsername,
  setPassword,
  login,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

import { Auth } from 'aws-amplify'
import { AppThunk } from '../../store/store'
import { callApi } from '../../helpers/apiHelpers'
import {
  loginStart,
  loginSuccess,
  loginError,
  getUserDetailsStart,
  getUserDetailsSuccess,
  getUserDetailsError,
} from './authSlice'
import { LoginDetails } from './authTypes'

export const login = (username: string, password: string): AppThunk => async (
  dispatch,
) => {
  dispatch(loginStart())
  try {
    const loginDetails = await Auth.signIn(username, password)
    const parsedValues = parseLoginDetails(loginDetails)
    localStorage.setItem('loginDetails', JSON.stringify(parsedValues))
    dispatch(loginSuccess(parsedValues))
    dispatch(getUserDetails(parsedValues))
  } catch (err) {
    dispatch(loginError(err))
  }
}

export const getUserDetails = (auth: LoginDetails): AppThunk => async (dispatch) => {
  dispatch(getUserDetailsStart())
  try {
    const userDetails = await callApi(auth, 'users', 'get', {}, {})
    dispatch(getUserDetailsSuccess(userDetails))
  } catch (err) {
    dispatch(getUserDetailsError(err.message))
  }
}

const parseLoginDetails = (payload: any): LoginDetails => ({
  username: payload.username,
  signInUserSession: {
    accessToken: {
      jwtToken: payload.signInUserSession.accessToken.jwtToken,
      payload: {
        authTime: payload.signInUserSession.accessToken.payload.auth_time,
        expires: payload.signInUserSession.accessToken.payload.exp * 1000,
        tokenUse: payload.signInUserSession.accessToken.payload.token_use,
      },
    },
    idToken: {
      jwtToken: payload.signInUserSession.idToken.jwtToken,
      payload: {
        authTime: payload.signInUserSession.idToken.payload.auth_time,
        expires: payload.signInUserSession.idToken.payload.exp * 1000,
        tokenUse: payload.signInUserSession.idToken.payload.token_use,
      },
    },
  },
})

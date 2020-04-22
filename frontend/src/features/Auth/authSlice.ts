import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { LoginDetails, LoginError } from './authTypes'

type AuthState = {
  username: string;
  password: string;
  loginUnderway: boolean;
  loginDetails: LoginDetails | null;
  loginError: LoginError | null;
}

const loginDetailsStorage = localStorage.getItem('loginDetails')
const initialLoginDetails = loginDetailsStorage != null ? JSON.parse(loginDetailsStorage) : null

const initialState: AuthState = {
  username: '',
  password: '',
  loginUnderway: false,
  loginDetails:
    initialLoginDetails != null
    && initialLoginDetails.signInUserSession?.idToken?.payload.expires > Date.now()
      ? initialLoginDetails
      : null,
  loginError: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUsername(state, action: PayloadAction<string>) {
      state.username = action.payload
      state.loginError = null
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload
      state.loginError = null
    },
    loginStart(state) {
      state.loginUnderway = true
      state.loginError = null
    },
    loginSuccess(state, action: PayloadAction<LoginDetails>) {
      state.loginDetails = action.payload
      state.loginError = null
      state.loginUnderway = false
    },
    loginError(state, action: PayloadAction<LoginError>) {
      state.loginDetails = null
      state.loginError = action.payload
      state.loginUnderway = false
    },
    getUserDetailsStart(state) {},
    getUserDetailsSuccess(state, action: PayloadAction<LoginDetails>) {},
    getUserDetailsError(state, action: PayloadAction<LoginError>) {},
  },
})

export const {
  setUsername,
  setPassword,
  loginStart,
  loginSuccess,
  loginError,
  getUserDetailsStart,
  getUserDetailsSuccess,
  getUserDetailsError,
} = authSlice.actions

export default authSlice.reducer

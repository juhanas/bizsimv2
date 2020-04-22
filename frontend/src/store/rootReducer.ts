import { combineReducers } from '@reduxjs/toolkit'
import appReducer from '../features/App/appSlice'
import authReducer from '../features/Auth/authSlice'
import gamesReducer from '../features/Games/gamesSlice'

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  games: gamesReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer

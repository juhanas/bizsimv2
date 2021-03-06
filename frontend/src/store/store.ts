import { configureStore, Action } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'

import rootReducer, { RootState } from './rootReducer'

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>

declare let module: any

const store = configureStore({
  reducer: rootReducer,
})

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default
    store.replaceReducer(newRootReducer)
  })
}

export type StoreDispatch = typeof store.dispatch

export default store

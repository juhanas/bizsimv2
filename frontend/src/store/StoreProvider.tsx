import React from 'react'
import { Provider } from 'react-redux'

import store from './store'

type StoreProviderProps = {
  children: React.ReactNode;
}

const StoreProvider = (props: StoreProviderProps): JSX.Element => {
  const { children } = props

  return <Provider store={store}>{children}</Provider>
}

export default StoreProvider

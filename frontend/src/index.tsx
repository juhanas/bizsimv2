import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import 'typeface-roboto'
import Amplify from 'aws-amplify'

import awsConfig from './aws-config'
import IntlWrapper from './i18n/IntlWrapper'
import StoreProvider from './store/StoreProvider'
import * as serviceWorker from './serviceWorker'

import './index.css'

Amplify.configure(awsConfig)

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StoreProvider>
        <IntlWrapper />
      </StoreProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

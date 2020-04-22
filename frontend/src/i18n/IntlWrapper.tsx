import React from 'react'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'
import { Translations } from './Messages'
import translationsFi from './translations/fi.json'
import App from '../features/App'
import { RootState } from '../store/rootReducer'

const messages: Translations = {
  fi: translationsFi,
}

type IntlWrapperProps = {
  language: string;
}

const IntlWrapper = ({ language }: IntlWrapperProps) => (
  <IntlProvider locale={language} messages={messages[language]}>
    <App />
  </IntlProvider>
)

const mapStateToProps = (state: RootState) => ({
  language: state.app.language,
})

export default connect(mapStateToProps)(IntlWrapper)

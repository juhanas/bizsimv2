import React from 'react'
import { FormattedMessage } from 'react-intl'
import { useSelector, useDispatch } from 'react-redux'

import Button from '@material-ui/core/Button'

import { RootState } from '../store/rootReducer'
import { setCounter } from './App/appSlice'

export const Home = () => {
  const dispatch = useDispatch()
  const { counter } = useSelector((state: RootState) => state.app)

  const click = () => {
    dispatch(setCounter(Math.random() * 100))
  }

  return (
    <div className="home">
      <div className="home-lander">
        <h1>Bizsim</h1>
        <FormattedMessage
          id="home.lander.text"
          defaultMessage="BizSim Business Simulator"
          description="Brief explanation of Bizsim"
        />
        <div>
          <p>{counter}</p>
          <Button variant="contained" onClick={() => click()}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  )
}

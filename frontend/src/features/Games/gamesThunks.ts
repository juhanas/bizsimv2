import { AppThunk } from '../../store/store'
import { callApi } from '../../helpers/apiHelpers'
import { LoginDetails } from '../Auth/authTypes'
import {
  getGamesStart,
  getGamesSuccess,
  getGamesError,
  joinGameStart,
  joinGameSuccess,
  joinGameError,
} from './gamesSlice'

export const getGames = (auth: LoginDetails): AppThunk => async (dispatch) => {
  dispatch(getGamesStart())
  try {
    const games = await callApi(auth, 'games', 'get', {}, {})
    dispatch(getGamesSuccess(games))
  } catch (err) {
    dispatch(getGamesError(err.message))
  }
}

export const joinGame = (
  gameId: string,
  companyName: string,
  auth: LoginDetails,
): AppThunk => async (dispatch) => {
  dispatch(joinGameStart())
  try {
    const joinGameDetails = await callApi(
      auth,
      'games/join',
      'post',
      {
        gameId,
        companyName,
      },
      {},
    )
    dispatch(joinGameSuccess(joinGameDetails))
  } catch (err) {
    dispatch(joinGameError(err.message))
  }
}

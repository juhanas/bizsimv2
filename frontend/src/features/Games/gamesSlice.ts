import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Game } from './gamesTypes'

type GamesError = any
type JoinGameError = any

type GamesState = {
  games: Game[];
  getGamesUnderway: boolean;
  getGamesError: GamesError | null;
  joinGameUnderway: boolean;
  joinGameError: JoinGameError | null;
}

const initialState: GamesState = {
  games: [],
  getGamesUnderway: false,
  getGamesError: null,
  joinGameUnderway: true,
  joinGameError: null,
}

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    getGamesStart(state) {
      state.getGamesUnderway = true
      state.getGamesError = null
    },
    getGamesSuccess(state, action: PayloadAction<{ games: Game[] }>) {
      state.games = action.payload.games
      state.getGamesError = null
      state.getGamesUnderway = false
    },
    getGamesError(state, action: PayloadAction<GamesError>) {
      state.games = []
      state.getGamesError = action.payload
      state.getGamesUnderway = false
    },
    joinGameStart(state) {
      state.joinGameUnderway = true
      state.joinGameError = null
    },
    joinGameSuccess(state, _action: PayloadAction<{ games: Game[] }>) {
      state.joinGameUnderway = true
      state.joinGameError = null
    },
    joinGameError(state, action: PayloadAction<GamesError>) {
      state.joinGameUnderway = true
      state.joinGameError = action.payload
    },
  },
})

export const {
  getGamesStart,
  getGamesSuccess,
  getGamesError,
  joinGameStart,
  joinGameSuccess,
  joinGameError,
} = gamesSlice.actions

export default gamesSlice.reducer

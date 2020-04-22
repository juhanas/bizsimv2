import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type AppState = {
  counter: number;
  language: string;
}

const initialState: AppState = {
  counter: 0,
  language: navigator.language,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCounter(state, action: PayloadAction<number>) {
      state.counter = action.payload
    },
    setLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload
    },
  },
})

export const { setCounter, setLanguage } = appSlice.actions

export default appSlice.reducer

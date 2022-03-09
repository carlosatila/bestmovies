import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import moviesReducer from '../modules/movies/moviesSlice'

export function makeStore() {
  return configureStore({
    reducer: { movies: moviesReducer },
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store
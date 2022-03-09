import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { AppState } from '../../app/store'
import { fetchData, searchData, fetchDetailsData } from './moviesAPI'

export interface MoviesState {
  data: object,
  selectedMovie: object,
  status: 'success' | 'loading' | 'error'
}

const initialState: MoviesState = {
  data: {},
  selectedMovie: {},
  status: 'loading',
}

export const fetchAsync = createAsyncThunk(
  'movies/fetchData',
  async () => {
    const response = await fetchData();
    return response;
  }
)

export const searchAsync = createAsyncThunk(
  'movies/searchhData',
  async (search: string) => {
    const response = await searchData(search);
    return response;
  }
)

export const fetchDetailsAsync = createAsyncThunk(
  'movies/fetchDetailshData',
  async (id: string) => {
    const response = await fetchDetailsData(id);
    return response;
  }
)

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, { payload }: PayloadAction<Array<object>>) => {
      state.data = payload;
    },
    setSelectedMovie: (state, { payload }: PayloadAction<object>) => {
      state.selectedMovie = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      /* FETCH DATA */
      .addCase(fetchAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.status = 'success'
        state.data = action.payload
      })
      /* SEARCH DATA */
      .addCase(searchAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(searchAsync.fulfilled, (state, action) => {
        state.status = 'success'
        state.data = action.payload
      })
      /* DETAILS DATA */
      .addCase(fetchDetailsAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchDetailsAsync.fulfilled, (state, action) => {
        state.status = 'success'
        state.selectedMovie = action.payload
      })
  },
})

export const { setMovies, setSelectedMovie } = moviesSlice.actions

export const selectMovies = (state: AppState) => state.movies.data
export const selectedMovie = (state: AppState) => state.movies.selectedMovie
export const statusMovie = (state: AppState) => state.movies.status

export default moviesSlice.reducer
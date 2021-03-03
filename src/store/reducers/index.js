import moviesReducer from './movies'
import moviesBySearchReducer from './movie-by-search'
import moviesByIdReducer from './movie-by-id'
import { combineReducers } from 'redux'

const allReducer = combineReducers({
  movies: moviesReducer,
  moviesBySearch: moviesBySearchReducer,
  moviesById: moviesByIdReducer,
})

export default allReducer

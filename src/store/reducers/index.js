import moviesReducer from './movies'
import moviesBySearchReducer from './movie-by-search'
import { combineReducers } from 'redux'

const allReducer = combineReducers({
  movies: moviesReducer,
  moviesBySearch: moviesBySearchReducer,
})

export default allReducer

import { fetchMovies, fetchMovieById } from '../../api'

export const getListMovies = (params) => async (dispatch) => {
  fetchMovies(params).then((res) => {
    if (res.status !== 200) {
      dispatch({
        type: 'ERR_LIST_MOVIES',
      })
    } else {
      dispatch({
        type: 'GET_LIST_MOVIES',
        data: res.data,
      })
    }
  })
}

export const getListMovieById = (params) => async (dispatch) => {
  fetchMovieById(params).then((res) => {
    if (res.status !== 200) {
      dispatch({
        type: 'ERR_LIST_MOVIES',
      })
    } else {
      dispatch({
        type: 'GET_LIST_MOVIES_BY_ID',
        data: res.data,
      })
    }
  })
}

export const getListMoviesBySearch = (params) => async (dispatch) => {
  switch (params.type) {
    case 'CLEAR_MOVIES_BY_SEARCH':
      dispatch({
        type: params.type,
      })
      break
    default:
      fetchMovies(params).then((res) => {
        if (res.status !== 200) {
          dispatch({
            type: 'ERR_LIST_MOVIES',
          })
        } else {
          dispatch({
            type: 'GET_LIST_MOVIES_BY_SEARCH',
            data: res.data,
          })
        }
      })
      break
  }
}

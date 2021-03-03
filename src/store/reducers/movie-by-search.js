const initialState = {
  data: [],
  totalResult: null,
  isLoading: true,
}

const moviesBySearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LIST_MOVIES_BY_SEARCH':
      state.data = state.data.concat(action.data.Search)
      state.totalResult = parseInt(action.data.totalResults)
      state.isLoading = false
      return { ...state }
    case 'CLEAR_MOVIES_BY_SEARCH':
      state.data = []
      state.totalResult = null
      state.isLoading = false
      return { ...state }
    default:
      return { ...state }
  }
}

export default moviesBySearchReducer

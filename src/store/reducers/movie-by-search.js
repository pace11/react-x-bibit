const initialState = {
  data: null,
  isLoading: true,
}

const moviesBySearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LIST_MOVIES_BY_SEARCH':
      state.data = action.data
      state.isLoading = false
      return { ...state }
    default:
      return { ...state }
  }
}

export default moviesBySearchReducer

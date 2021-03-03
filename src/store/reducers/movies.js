const initialState = {
  data: null,
  isLoading: true,
}

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LIST_MOVIES':
      state.data = action.data
      state.isLoading = false
      return { ...state }
    default:
      return { ...state }
  }
}

export default moviesReducer

import { createStore } from 'redux'

const initialState = {
  user: '',
  isAuthorized: false,
  isLoading: true,
  error: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_IS_AUTHORIZED':
      return Object.assign({}, state, { isAuthorized: action.payload })
    case 'SET_USER':
      return Object.assign({}, state, { user: action.payload })
    case 'SET_ERROR':
      return Object.assign({}, state, { error: action.payload })
    case 'SET_LOADING':
      return Object.assign({}, state, { isLoading: action.payload })
    default:
      return state
  }
}

const store = createStore(reducer)

export default store

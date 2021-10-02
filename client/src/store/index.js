import { createStore } from 'redux'

const initialState = {
  isAuthorized: false,
  isLoading: true,
  isError: false,
  isGuest: false,
  data: {
    user: {},
    order_list: [],
    total: 0,
  },
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_IS_AUTHORIZED':
      return Object.assign({}, state, { isAuthorized: action.payload })
    case 'SET_LOADING':
      return Object.assign({}, state, { isLoading: action.payload })
    case 'SET_ERROR':
      return Object.assign({}, state, { isError: action.payload })
    case 'SET_DATA':
      return Object.assign({}, state, { data: action.payload })
    case 'SET_GUEST':
      return Object.assign({}, state, { isGuest: action.payload })
    default:
      return state
  }
}

const store = createStore(reducer)

export default store

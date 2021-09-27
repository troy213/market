import { createStore } from 'redux'

const initialState = {
  user: '',
  isAuthorized: false,
  isLoading: true,
  error: '',
  orderList: [],
  hasData: false,
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
    case 'SET_ORDERLIST':
      return Object.assign({}, state, { orderList: action.payload })
    case 'SET_HAS_DATA':
      return Object.assign({}, state, { hasData: action.payload })
    default:
      return state
  }
}

const store = createStore(reducer)

export default store

import { createStore } from 'redux'

const initialState = {
  cart: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const store = createStore(reducer)

export default store

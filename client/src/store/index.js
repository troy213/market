import { createStore } from 'redux'

const initialState = {
  market: {
    value: 'test',
  },
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const store = createStore(reducer)

export default store

import { combineReducers } from "redux";

const kind = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_KIND':
      return {
        ...state,
        isFetch: true
      }
    default:
      return state
  }
}

const fetch = (state = {}, action) => {
  switch (action.type) {
    case 'REQUEST_POSTS':
      return {
        ...state,
        isFetch: true
      }
    case 'RECEIVE_POSTS':
      return {
        ...state,
        status: 'ok'
      }
    default:
      return state
  }
}

const reducers = combineReducers({
  kind
})

export default reducers;
import { combineReducers } from "redux";

const kind = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_KIND_SUCCESS':
      return {
        ...state,
        fetch: true
      }
    case 'GET_KIND_SUCCESS':
      return {
        ...state,
        item: {
          kind: action.item
        }
      }
    default:
      return {
        ...state
      }
  }
}

const reducers = combineReducers({
  kind
})

export default reducers;
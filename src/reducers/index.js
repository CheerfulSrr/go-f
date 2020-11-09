import { combineReducers } from "redux";

const test = (state = {}, action) => {
  return {
    ...state
  }
}

const reducers = combineReducers({
  test
})

export default reducers;
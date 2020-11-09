import { axios } from '@/util';

const ADD_KIND_REQUEST = 'ADD_KIND_REQUEST'
const ADD_KIND_SUCCESS = 'ADD_KIND_SUCCESS'

export const addKindRequest = state => ({
  type: ADD_KIND_REQUEST,
  isFetch: true,
  text: state,
})

export const addKindSuccess = (state, data) => ({
  type: ADD_KIND_SUCCESS,
  text: state,
  item: data
})

export const addKind = state => dispatch => {
  dispatch(addKindRequest(state))
  return axios
    .get("/kind/create", { params: state })
    .then(result => dispatch(addKindSuccess(state, result.data)))
}

import { axios } from '@/util';

const ADD_KIND_REQUEST = 'ADD_KIND_REQUEST'
const ADD_KIND_SUCCESS = 'ADD_KIND_SUCCESS'

const GET_KIND_REQUEST = 'GET_KIND_REQUEST'
const GET_KIND_SUCCESS = 'GET_KIND_SUCCESS'

export const addKindRequest = state => ({
  type: ADD_KIND_REQUEST,
  text: state,
})
export const addKindSuccess = (state, data) => ({
  type: ADD_KIND_SUCCESS,
  text: state,
  item: data,
  fetch: true
})
export const addKind = state => dispatch => {
  dispatch(addKindRequest(state))
  return axios
    .get("/kind/create", { params: state })
    .then(result => dispatch(addKindSuccess(state, result.data)))
}


const getKindRequest = () => ({
  type: GET_KIND_REQUEST
})
const getKindSuccess = data => ({
  type: GET_KIND_SUCCESS,
  item: data
})
export const getKind = state => dispatch => {
  dispatch(getKindRequest(state))
  return axios
    .get("/kind/list")
    .then(result => dispatch(getKindSuccess(result.data)))
}
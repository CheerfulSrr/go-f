import { axios } from '@/util';

const ADD_KIND = 'ADD_KIND'
const REQUEST_POSTS = 'REQUEST_POSTS'
const RECEIVE_POSTS = 'RECEIVE_POSTS'

export const addKind = (state) => ({
  type: ADD_KIND,
  isFetch: true,
  text: state
})

export const receivePosts = (state, data) => ({
  type: RECEIVE_POSTS,
  text: state,
  item: data
})

export const requestPosts = state => ({
  type: REQUEST_POSTS,
  text: state,
})

export const fetchKind = state => dispatch => {
  dispatch(addKind(state))
  dispatch(requestPosts(state))
  return axios({
    url: "/kind/create",
    params: state})
    .then(result => (dispatch(receivePosts(state, result.data))))
}


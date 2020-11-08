import Axios from 'axios';
import qs from 'query-string'

export const axios = Axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 30000,
  paramsSerializer: params => qs.stringify(params)
});

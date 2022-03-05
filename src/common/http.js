import { BASE_URL } from './constant'

import axios from 'axios'

let _axios = axios.create({
  xsrfCookieName: 'django-cli_csrf_token',
  xsrfHeaderName: 'X-CSRFToken',
  withCredentials: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json',
  baseURL: BASE_URL
})

_axios.interceptors.response.use(
  response => {
    if (!response.data.result) {
      response.data.data = JSON.stringify(response.data.data)
    }
    return response.data
  }
)

export default _axios

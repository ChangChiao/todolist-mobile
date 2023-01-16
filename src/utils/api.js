import axios from 'axios'
const service = axios.create({})

const getAuthorizationHeader = () => {
  const token = localStorage.getItem('token')
  return {
    authorization: `Bearer ${token}`,
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

service.interceptors.request.use(
  (config) => {
    config.headers = getAuthorizationHeader()
    return config
  },
  (error) => {
    return error
  }
)

service.interceptors.response.use(
  (response) => {
    return response.data
  },
  async (error) => {
    const status = error?.response?.status
    console.log(`error--${status}`, 'error')
    return Promise.reject(error)
  }
)

export default service
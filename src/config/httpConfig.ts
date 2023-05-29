import axios, { AxiosInstance } from 'axios'

import { useToken } from '../hooks/useToken'

export function httpClient(): AxiosInstance {
  const protocol = 'http'

  const host = 'localhost:3001/api/v1'

  const baseURL = `${protocol}://${host}`

  const instance = axios.create({
    baseURL,
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    },
  })

  instance.interceptors.request.use((config: any) => {
    const { token } = useToken()

    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      }
    }

    return config
  })

  return instance
}

import axios from 'axios'

// Define a type for the API response
interface ApiResponse<T> {
  data: T
  status: number
  message?: string
}

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Use environment variable for the base URL
  timeout: 10000, // Request timeout in milliseconds
})

// GET method
const get = async <T>(url: string, config?: Record<string, unknown>): Promise<ApiResponse<T>> => {
  try {
    const response = await apiClient.get<ApiResponse<T>>(url, config)
    return response.data
  } catch (error) {
    throw error
  }
}

// POST method
const post = async <T>(
  url: string,
  data: unknown,
  config?: Record<string, unknown>,
): Promise<ApiResponse<T>> => {
  try {
    const response = await apiClient.post<ApiResponse<T>>(url, data, config)
    console.log('response: ' + response)
    return response.data
  } catch (error) {
    throw error
  }
}

// Export methods for use in Vue components
export default {
  get,
  post,
}

import axios from 'axios'

export const API_URL = `${import.meta.env.VITE_API_URL}/api`

const $api = axios.create({ baseURL: API_URL })

$api.interceptors.request.use(config => {
	config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
	return config
})

export default $api

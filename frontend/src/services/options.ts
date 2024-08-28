import type { ApiResponse } from '@/types'
import { handleApiError } from '@utils/errorHandlers'
import apiClient from './client'

const fetchOptions = async (): Promise<ApiResponse> => {
	try {
		const { status, data } = await apiClient.get('/api/data')
		return {
			status: status,
			data: data,
			message: 'Successfully fetched options',
		}
	} catch (error) {
		return handleApiError(error)
	}
}

export default fetchOptions

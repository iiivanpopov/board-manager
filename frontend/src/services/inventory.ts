import type { ApiResponse, BoardInventoryType } from '@/types'
import { handleApiError } from '@utils/errorHandlers'
import { hasEmptyField, workerGuard } from '@utils/guards'
import apiClient from './client'

const saveBoardInventory = async (
	record: BoardInventoryType,
	worker: number
): Promise<ApiResponse> => {
	try {
		if (workerGuard(worker)) {
			return { status: 400, message: 'Unexpected worker number' }
		}

		if (hasEmptyField(record)) {
			return { status: 400, message: 'Unexpected data' }
		}

		const response = await apiClient.post(`/api/inventory/${worker}`, record)
		return { status: response.status, message: 'Successful' }
	} catch (error) {
		return handleApiError(error)
	}
}

export default saveBoardInventory

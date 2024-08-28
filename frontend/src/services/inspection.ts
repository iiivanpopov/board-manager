import type { ApiResponse, BoardInspectionType } from '@/types'
import { handleApiError } from '@utils/errorHandlers'
import { hasEmptyField, workerGuard } from '@utils/guards'
import apiClient from './client'

const saveBoardInspection = async (
	record: BoardInspectionType,
	worker: number
): Promise<ApiResponse> => {
	try {
		if (workerGuard(worker)) {
			return { status: 400, message: 'Unexpected worker number' }
		}
		if (hasEmptyField(record))
			return { status: 400, message: 'Unexpected data' }

		const { status } = await apiClient.post(`/api/inspection/${worker}`, record)
		return { status, message: 'Successful' }
	} catch (error) {
		return handleApiError(error)
	}
}

export default saveBoardInspection

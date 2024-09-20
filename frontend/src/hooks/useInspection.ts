import axios from 'axios'
import type { UseInspectionType } from '../types'
import { weekNumber } from '../utils/date'
import {
	deleteInspectionRecordUrl,
	saveInspectionRecordUrl,
} from '../utils/URLs'

const useInspection: UseInspectionType = (
	{ inspectionId, inspector, date, product, defect, defectType, worker },
	setInspectionId,
	setStatusCode
) => {
	const isSaveDataValid = () =>
		worker && inspector && product && defectType && defect

	const saveInspection = async () => {
		if (!isSaveDataValid()) return

		try {
			const request = await axios.post(saveInspectionRecordUrl(worker), {
				week: weekNumber(date),
				date,
				inspector,
				product,
				defectType,
				defect,
			})
			setInspectionId(request.data?.inspection?.id)
			setStatusCode(String(request.status))
		} catch (error) {
			console.error('Error saving inspection record:', error)
			setStatusCode(error.response?.status ?? '500')
		}
	}

	const deleteInspection = async () => {
		if (!inspectionId) return

		try {
			const { status } = await axios.delete(
				deleteInspectionRecordUrl(inspectionId)
			)
			setInspectionId('')
			setStatusCode(String(status))
		} catch (error) {
			console.error('Error deleting inspection record:', error)
			setStatusCode(error.response?.status ?? '500')
		}
	}

	return { saveInspection, deleteInspection }
}

export default useInspection

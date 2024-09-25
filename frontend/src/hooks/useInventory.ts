import axios from 'axios'
import type { UseInventoryType } from '../types'
import { weekNumber } from '../utils/date'
import { deleteInventoryRecordUrl, saveInventoryRecordUrl } from '../utils/URLs'

const useInventory: UseInventoryType = (
	{ inventoryId, date, product, quantity, worker },
	setInventoryId,
	setStatusCode
) => {
	const isSaveDataValid = () => worker && product && +quantity > 0

	const saveInventory = async () => {
		if (!isSaveDataValid()) return

		try {
			const request = await axios.post(saveInventoryRecordUrl(worker), {
				week: weekNumber(date),
				date,
				product,
				quantity,
			})
			setInventoryId(request.data?.inventory?.id)
			setStatusCode(String(request.status))
		} catch (error) {
			console.error('Error saving inventory record:', error)
			setStatusCode(error.response?.status ?? '500')
		}
	}

	const deleteInventory = async () => {
		if (!inventoryId) return

		try {
			const { status } = await axios.delete(
				deleteInventoryRecordUrl(inventoryId)
			)
			setInventoryId('')
			setStatusCode(String(status))
		} catch (error) {
			console.error('Error deleting inventory record:', error)
			setStatusCode(error.response?.status ?? '500')
		}
	}

	return { saveInventory, deleteInventory }
}

export default useInventory

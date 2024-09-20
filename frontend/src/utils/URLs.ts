const baseUrl = import.meta.env.VITE_SERVER_URL

export const saveInventoryRecordUrl = (worker: string) =>
	`${baseUrl}/api/inventory/${worker}`

export const deleteInventoryRecordUrl = (inventoryId: string) =>
	`${baseUrl}/api/inventory/${inventoryId}`

export const saveInspectionRecordUrl = (worker: string) =>
	`${baseUrl}/api/inspection/${worker}`

export const deleteInspectionRecordUrl = (inspectionId: string) =>
	`${baseUrl}/api/inspection/${inspectionId}`

export const fetchDataUrl = `${baseUrl}/api/data`

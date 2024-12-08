import { AxiosResponse } from 'axios'
import $api from '../api'
import { Inspection, Inventory } from '../models/RecordResponse'

export default class RecordService {
	static async saveInspection(
		payload: Omit<Inspection, 'createdAt' | 'id'>
	): Promise<AxiosResponse<{ inspection: Inspection }>> {
		const response = await $api.post<{ inspection: Inspection }>(
			`/inspection/${payload.worker}`,
			{ ...payload }
		)
		return response
	}

	static async deleteInspection(
		id: number
	): Promise<AxiosResponse<Inspection>> {
		const response = await $api.delete<Inspection>(`/inspection/${id}`)
		return response
	}

	static async saveInventory(
		payload: Omit<Inventory, 'createdAt' | 'id'>
	): Promise<AxiosResponse<{ inventory: Inventory }>> {
		const response = await $api.post<{ inventory: Inventory }>(
			`/inventory/${payload.worker}`,
			{ ...payload }
		)
		return response
	}

	static async deleteInventory(id: number): Promise<AxiosResponse<Inventory>> {
		const response = await $api.delete<Inventory>(`/inventory/${id}`)
		return response
	}
}

import { loadLocal, setTodayDate, setWeek, updateWeekLabel } from '@utils/ui'
import { elements } from './elements'
import {
	handleFetchBtn,
	handleInspectionBtn,
	handleInventoryBtn,
} from './handlers'

export const setupEventListeners = () => {
	elements.saveInspectionBtn?.addEventListener('click', function () {
		handleInspectionBtn()
		this.classList.remove('bg-green-500')
		this.classList.add('bg-green-700')

		setTimeout(() => {
			this.classList.remove('bg-green-700')
			this.classList.add('bg-green-500')
		}, 2000)
	})
	elements.saveInventoryBtn?.addEventListener('click', function () {
		handleInventoryBtn()
		this.classList.remove('bg-green-500')
		this.classList.add('bg-green-700')

		setTimeout(() => {
			this.classList.remove('bg-green-700')
			this.classList.add('bg-green-500')
		}, 2000)
	})
	elements.fetchOptionsBtn?.addEventListener('click', function () {
		handleFetchBtn()
		this.classList.remove('bg-blue-500')
		this.classList.add('bg-blue-700')

		setTimeout(() => {
			this.classList.remove('bg-blue-700')
			this.classList.add('bg-blue-500')
		}, 2000)
	})

	elements.inspection.dateField?.addEventListener('change', function () {
		updateWeekLabel('.inspection', elements.inspection.dateField)
	})

	elements.inventory.dateField?.addEventListener('change', () =>
		updateWeekLabel('.inventory', elements.inventory.dateField)
	)

	document.addEventListener('DOMContentLoaded', () => {
		loadLocal()
		setTodayDate()
		setWeek()
	})
}

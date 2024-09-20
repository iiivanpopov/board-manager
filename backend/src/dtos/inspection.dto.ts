class InspectionDTO {
	date: Date
	week: number
	inspector: string
	product: string
	defectType: string
	defect: string
	worker: number

	constructor(model: any) {
		this.date = new Date(model.date)
		this.week = +model.week
		this.inspector = model.inspector
		this.product = model.product
		this.defectType = model.defectType
		this.defect = model.defect
		this.worker = +model.worker
	}
}

export default InspectionDTO

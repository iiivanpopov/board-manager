import { useState } from 'react'
import useInspection from '../hooks/useInspection'
import type { InspectionFormType } from '../types'
import Button from './shared/Button'
import DateInput from './shared/DateInput'
import Dropdown from './shared/Dropdown'

const InspectionForm: InspectionFormType = ({
	worker,
	options,
	setStatusCode,
}) => {
	const [inspectionId, setInspectionId] = useState<string>('')

	const [date, setDate] = useState<Date>(new Date())
	const [inspector, setInspector] = useState<string>('')
	const [defectType, setDefectType] = useState<string>('')
	const [defect, setDefect] = useState<string>('')
	const [product, setProduct] = useState<string>('')

	const { saveInspection, deleteInspection } = useInspection(
		{ date, inspector, product, defectType, defect, inspectionId, worker },
		setInspectionId,
		setStatusCode
	)

	return (
		<div className='grid grid-cols-1 gap-4'>
			<DateInput date={date} setDate={setDate} />

			<Dropdown
				label='Inspector'
				value={inspector}
				options={options?.inspectors || []}
				setter={setInspector}
				placeholder='Select an inspector'
			/>

			<Dropdown
				label='Defect Type'
				value={defectType}
				options={options?.defectTypes || []}
				setter={setDefectType}
				placeholder='Select a defect type'
			/>

			<Dropdown
				label='Defect'
				value={defect}
				options={options?.defects || []}
				setter={setDefect}
				placeholder='Select a defect'
			/>

			<Dropdown
				label='Product'
				value={product}
				options={options?.products || []}
				setter={setProduct}
				placeholder='Select a product'
			/>

			<div className='grid md:grid-cols-2 gap-5'>
				<Button
					disabled={
						!inspector || !defectType || !defect || !product || !date || !worker
					}
					className='bg-green-300'
					onClick={saveInspection}
				>
					Save
				</Button>

				<Button
					disabled={!inspectionId}
					className='bg-red-300'
					onClick={deleteInspection}
				>
					Delete
				</Button>
			</div>
		</div>
	)
}

export default InspectionForm

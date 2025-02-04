import { observer } from 'mobx-react-lite'
import { useContext, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { formatDate } from '../helpers/date'
import { Context } from '../main'
import { Button } from './Button'
import { DateInput } from './DateInput'
import { Dropdown } from './Dropdown'
import { Input } from './Input'

export const InspectionForm: React.FC<{ className?: string }> = observer(
	({ className }) => {
		const { store } = useContext(Context)

		const [date, setDate] = useState<string>(formatDate(new Date()))
		const [product, setProduct] = useState<string>('')
		const [defectType, setDefectType] = useState<string>('')
		const [defect, setDefect] = useState<string>('')
		const [quantity, setQuantity] = useState<string>('')

		const weekNumber = new Date(date).getWeek()

		const products = store.options.products
		const defects = store.options.defects
		const defectTypes = store.options.defectTypes

		const isFormValid = product && defectType && defect && date

		const handleSave = async () => {
			try {
				await store.saveInspection({
					date: new Date(date),
					week: weekNumber,
					quantity: +quantity,
					inspector: store.user.fullName,
					product,
					defectType,
					defect,
					worker: +store.worker,
				})
			} catch (error) {
				console.error('Error saving inspection:', error)
			}
		}

		return (
			<div
				className={twMerge(
					'grid grid-rows-6 items-center h-full w-full lg:w-3/4 gap-4 p-5',
					className
				)}
			>
				<DateInput
					label={`Week: ${weekNumber}`}
					onChange={setDate}
					selected={date}
				/>
				<Input
					value={quantity}
					onChange={setQuantity}
					placeholder='Enter a quantity'
				/>
				<Dropdown
					options={products}
					showCheckbox
					placeholder='Enter a product'
					onChange={setProduct}
					value={product}
				/>
				<Dropdown
					options={defectTypes}
					placeholder='Enter a defect type'
					onChange={setDefectType}
					value={defectType}
				/>
				<Dropdown
					options={defects}
					placeholder='Enter a defect'
					onChange={setDefect}
					value={defect}
				/>

				<Button disabled={!isFormValid} color='green' onClick={handleSave}>
					Save
				</Button>
			</div>
		)
	}
)

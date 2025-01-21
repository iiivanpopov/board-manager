import clsx from 'clsx'
import { observer } from 'mobx-react-lite'
import { useCallback, useContext, useMemo, useState } from 'react'
import { formatDate, getWeekNumber } from '../helpers/date'
import { Context } from '../main'
import { Button } from './Button'
import { DateInput } from './DateInput'
import { Dropdown } from './Dropdown'

export const InspectionForm: React.FC<{ className?: string }> = observer(
	({ className }) => {
		const { store } = useContext(Context)
		const [date, setDate] = useState<string>(formatDate(new Date()))
		const [product, setProduct] = useState<string>('')
		const [defectType, setDefectType] = useState<string>('')
		const [defect, setDefect] = useState<string>('')

		const weekNumber = useMemo(() => getWeekNumber(new Date(date)), [date])

		const products = useMemo(() => store.options.products, [])
		const defects = useMemo(() => store.options.defects, [])
		const defectTypes = useMemo(() => store.options.defectTypes, [])

		const handleDateChange = useCallback((value: string) => setDate(value), [])
		const handleProductChange = useCallback(
			(value: string) => setProduct(value),
			[]
		)

		const handleDefectTypeChange = useCallback(
			(value: string) => setDefectType(value),
			[]
		)
		const handleDefectChange = useCallback(
			(value: string) => setDefect(value),
			[]
		)

		const isFormValid = useMemo(
			() => product && defectType && defect && date,
			[product, defectType, defect, date]
		)

		const handleSave = useCallback(async () => {
			try {
				await store.saveInspection({
					date: new Date(date),
					week: weekNumber,
					inspector: store.user.fullName,
					product,
					defectType,
					defect,
					worker: +store.worker,
				})
			} catch (error) {
				console.error('Error saving inspection:', error)
			}
		}, [
			date,
			defect,
			defectType,
			product,
			store.user,
			store.worker,
			weekNumber,
		])

		return (
			<div
				className={clsx(
					'grid grid-rows-5 items-center h-full w-full lg:w-3/4 gap-4 p-5',
					className
				)}
			>
				<DateInput
					label={`Week: ${weekNumber}`}
					onChange={handleDateChange}
					selected={date}
				/>
				<Dropdown
					options={products}
					showCheckbox
					placeholder='Enter a product'
					onChange={handleProductChange}
					value={product}
				/>
				<Dropdown
					options={defectTypes}
					placeholder='Enter a defect type'
					onChange={handleDefectTypeChange}
					value={defectType}
				/>
				<Dropdown
					options={defects}
					placeholder='Enter a defect'
					onChange={handleDefectChange}
					value={defect}
				/>
				<Button disabled={!isFormValid} color='green' onClick={handleSave}>
					Save
				</Button>
			</div>
		)
	}
)

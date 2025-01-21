import clsx from 'clsx'
import { observer } from 'mobx-react-lite'
import { useCallback, useContext, useMemo, useState } from 'react'
import { formatDate, getWeekNumber } from '../helpers/date'
import { Context } from '../main'
import { Button } from './Button'
import { DateInput } from './DateInput'
import { Dropdown } from './Dropdown'
import { Input } from './Input'

export const InventoryForm: React.FC<{ className?: string }> = observer(
	({ className }) => {
		const [date, setDate] = useState<string>(formatDate(new Date()))
		const [product, setProduct] = useState<string>('')
		const [quantity, setQuantity] = useState<string>('')

		const { store } = useContext(Context)

		const products = useMemo(() => store.options.products, [])

		const weekNumber = useMemo(() => getWeekNumber(new Date(date)), [date])

		const handleDateChange = useCallback((value: string) => setDate(value), [])
		const handleProductChange = useCallback(
			(value: string) => setProduct(value),
			[]
		)
		const handleQuantityChange = useCallback(
			(value: string) => setQuantity(value),
			[]
		)

		const isFormValid = useMemo(
			() => date && +quantity > 0 && product,
			[date, quantity, product]
		)

		const handleSave = useCallback(async () => {
			try {
				store.saveInventory({
					date: new Date(date),
					week: weekNumber,
					quantity: +quantity,
					inspector: store.user.fullName,
					product,
					worker: +store.worker,
				})
			} catch (error) {
				console.error('Error saving inventory:', error)
			}
		}, [date, weekNumber, quantity, product, store.worker])

		return (
			<div
				className={clsx(
					'grid grid-rows-5 items-center h-full w-full lg:w-3/4 gap-4 p-5',
					className
				)}
			>
				{store.isLoading ? (
					'Loading'
				) : (
					<>
						<DateInput
							label={`Week: ${weekNumber}`}
							onChange={handleDateChange}
							selected={date}
						/>
						<Dropdown
							options={products}
							placeholder='Enter a product'
							onChange={handleProductChange}
							showCheckbox
							value={product}
						/>
						<Input
							value={quantity}
							onChange={handleQuantityChange}
							placeholder='Enter a quantity'
						/>
						<Button
							disabled={!isFormValid}
							onClick={handleSave}
							color='green'
							className='row-start-5'
						>
							Save
						</Button>
					</>
				)}
			</div>
		)
	}
)

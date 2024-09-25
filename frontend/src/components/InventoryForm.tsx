import { useState } from 'react'
import useInventory from '../hooks/useInventory'
import type { InventoryFormType } from '../types'
import Button from './shared/Button'
import DateInput from './shared/DateInput'
import Dropdown from './shared/Dropdown'
import TextInput from './shared/TextInput'

const InventoryForm: InventoryFormType = ({
	worker,
	products,
	setStatusCode,
}) => {
	const [inventoryId, setInventoryId] = useState<string>('')
	const [date, setDate] = useState<Date>(new Date())
	const [quantity, setQuantity] = useState<string>('0')
	const [product, setProduct] = useState<string>('')

	const { saveInventory, deleteInventory } = useInventory(
		{ date, product, inventoryId, quantity, worker },
		setInventoryId,
		setStatusCode
	)

	return (
		<div className='grid grid-cols-1 gap-4'>
			<DateInput date={date} setDate={setDate} />

			<TextInput
				label='Quantity'
				value={String(quantity)}
				setter={setQuantity}
				placeholder='Enter a quantity'
			/>

			<Dropdown
				label='Product'
				value={product}
				options={products}
				setter={setProduct}
				placeholder='Select a product'
			/>

			<div className='grid md:grid-cols-2 gap-5'>
				<Button
					disabled={!(+quantity > 0 && product && date && worker)}
					className='bg-green-300'
					onClick={saveInventory}
				>
					Save
				</Button>

				<Button
					disabled={!inventoryId}
					className='bg-red-300'
					onClick={deleteInventory}
				>
					Delete
				</Button>
			</div>
		</div>
	)
}

export default InventoryForm

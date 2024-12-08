import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Record } from '../models/RecordResponse'

export const RecordItem = ({
	record,
	onDelete,
}: {
	record: Record
	onDelete: () => Promise<void>
}) => {
	const isInspection = 'defect' in record
	return (
		<div className='bg-gray-300 flex justify-between p-5 rounded-md shadow-md'>
			<div className='flex flex-col'>
				<div>
					<strong>Date: </strong>
					{record.date.toLocaleDateString()}
				</div>
				<div>
					<strong>Product: </strong>
					{record.product}
				</div>
				{isInspection ? (
					<>
						<div>
							<strong>Defect type: </strong>
							{record.defectType}
						</div>
						<div>
							<strong>Defect: </strong>
							{record.defect}
						</div>
					</>
				) : (
					<div>
						<strong>Quantity: </strong>
						{record.quantity}
					</div>
				)}
			</div>
			<button
				onClick={onDelete}
				className='hover:text-red-500 delay-75 ease-in duration-300'
			>
				<FontAwesomeIcon icon={faTrash} />
			</button>
		</div>
	)
}

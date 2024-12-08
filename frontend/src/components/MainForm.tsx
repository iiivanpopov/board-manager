import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { useCallback, useContext, useState } from 'react'
import { useButtonClass } from '../hooks/useButtonClass'
import { Context } from '../main'
import { Card } from './Card'
import { InspectionForm } from './InspectionForm'
import { InventoryForm } from './InventoryForm'
import { Modal } from './Modal'
import { RecordsList } from './RecordsList'

export const MainForm: React.FC = observer(() => {
	const [mode, setMode] = useState<'Inspection' | 'Inventory'>('Inspection')
	const [isModalOpen, setIsModalOpen] = useState(false)
	const { store } = useContext(Context)

	const inspectionButtonClass = useButtonClass('Inspection', mode)
	const inventoryButtonClass = useButtonClass('Inventory', mode)

	const handleCloseModal = useCallback(() => setIsModalOpen(false), [])

	return (
		<>
			{store.isAuth ? (
				<Card className='mt-10 flex-col items-center lg:w-[450px]'>
					<div className='bg-gray-300 h-12 flex px-5 sm:px-10 lg:px-20 justify-between text-base sm:text-lg w-full rounded-t-md shadow-md'>
						<button
							onClick={() => setMode('Inspection')}
							className={inspectionButtonClass}
						>
							Inspection
						</button>
						<button
							onClick={() => setMode('Inventory')}
							className={inventoryButtonClass}
						>
							Inventory
						</button>
						<button
							onClick={() => setIsModalOpen(true)}
							className='hover:text-blue-600 transition delay-75 duration-150 ease-in'
						>
							Records
						</button>
					</div>
					<Modal
						isOpen={isModalOpen}
						className='max-w-full max-h-full w-[90vw] sm:w-[600px] p-5 sm:p-10'
						onClose={handleCloseModal}
					>
						<RecordsList records={toJS(store.lastRecords)} />
					</Modal>
					{mode === 'Inspection' ? <InspectionForm /> : <InventoryForm />}
				</Card>
			) : (
				<h1 className='mt-10 text-2xl sm:text-4xl'>Login please</h1>
			)}
		</>
	)
})

import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import InspectionForm from '../../components/InspectionForm'
import InventoryForm from '../../components/InventoryForm'
import Dropdown from '../../components/shared/Dropdown'
import useFetch from '../../hooks/useFetch'
import type { SelectOptionsType } from '../../types'
import { fetchDataUrl } from '../../utils/URLs'

const Dashboard: React.FC = () => {
	const { data } = useFetch<SelectOptionsType>(fetchDataUrl)

	const [statusCode, setStatusCode] = useState<string>('')
	const [worker, setWorker] = useState<string>('1')

	const timeoutRef = useRef<number | null>(null)

	useEffect(() => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current)
		}

		timeoutRef.current = window.setTimeout(() => {
			setStatusCode('')
		}, 3000)

		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current)
			}
		}
	}, [statusCode])

	return (
		<div className='rounded-md shadow-xl bg-slate-100 grid grid-cols-1 gap-5 md:gap-10 p-10 text-md md:grid-cols-2 md:grid-rows-[auto,5fr] md:text-lg md:size-2/3'>
			<div className='md:col-span-2 flex flex-col'>
				<div className='flex gap-x-5'>
					<p>Status code:</p>
					<span
						className={clsx({
							'text-green-700': +statusCode == 200 || +statusCode == 201,
							'text-red-300': +statusCode != 200 && +statusCode != 201,
						})}
					>
						{statusCode}
					</span>
				</div>

				<Dropdown
					label='Worker'
					value={worker}
					options={['1', '2']}
					setter={setWorker}
					placeholder='Select a worker'
				/>
			</div>
			<InspectionForm
				setStatusCode={setStatusCode}
				options={data}
				worker={worker}
			/>
			<InventoryForm
				setStatusCode={setStatusCode}
				products={data?.products ?? []}
				worker={worker}
			/>
		</div>
	)
}

export default Dashboard

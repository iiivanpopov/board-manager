import { useEffect, useState } from 'react'
import type { DateInputType } from '../../types'
import { weekNumber } from '../../utils/date'

const DateInput: DateInputType = ({ date, setDate }) => {
	const [week, setWeek] = useState<number>(0)

	useEffect(() => {
		setWeek(weekNumber(date))
	}, [date])

	return (
		<div className='flex flex-col'>
			<label htmlFor='date'>Date | Week: {week}</label>
			<input
				className='outline-none bg-transparent border-slate-200 border-2 rounded-md md:p-2'
				type='date'
				name='date'
				id='date'
				onChange={e => setDate(new Date(e.target.value))}
				value={date.toISOString().split('T')[0]}
			/>
		</div>
	)
}

export default DateInput

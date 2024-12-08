import clsx from 'clsx'
import { memo } from 'react'

export const DateInput: React.FC<{
	className?: string
	label?: string
	onChange: (value: string) => void
	selected: string
}> = memo(({ className, label, onChange, selected }) => {
	return (
		<div className={clsx('flex flex-col w-full', className)}>
			{label && <label className='mb-2'>{label}</label>}
			<input
				type='date'
				className='rounded-md border-2 px-4 py-2 border-[#D9D9D9] outline-none transition-colors delay-75 duration-150 focus:border-blue-600'
				value={selected}
				onChange={e => {
					onChange(e.target.value)
				}}
			/>
		</div>
	)
})

import clsx from 'clsx'
import React, { memo } from 'react'

export const Checkbox: React.FC<{
	className?: string
	checked: boolean
	label?: string
	onChange: () => void
}> = memo(({ className, checked, label, onChange }) => {
	return (
		<div className={clsx('flex flex-col justify-center items-end', className)}>
			{label && <label>{label}</label>}
			<input
				type='checkbox'
				className='size-10 outline-none rounded-md border-[#D9D9D9] border-2'
				checked={checked}
				onChange={onChange}
			/>
		</div>
	)
})

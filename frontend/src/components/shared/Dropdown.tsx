import type { DropdownType } from '../../types'

const Dropdown: DropdownType = ({
	label,
	value,
	options,
	setter,
	placeholder,
}) => {
	return (
		<div className='flex flex-col'>
			<label htmlFor={label}>{label}</label>
			<select
				className='outline-none bg-transparent border-slate-200 border-2 rounded-md md:p-2 appearance-none'
				name={label}
				id={label}
				value={value}
				onChange={e => setter(e.target.value)}
			>
				<option value='' disabled>
					{placeholder || `Select a ${label}`}
				</option>
				{options.map(option => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	)
}

export default Dropdown

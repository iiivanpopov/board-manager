import { observer } from 'mobx-react-lite'
import { useCallback, useContext, useMemo, useState } from 'react'
import { Context } from '../main'
import { Checkbox } from './Checkbox'

interface DropdownProps {
	options: ({ label: string; value: string } | string)[]
	onChange: (value: string) => void
	label?: string
	value: string
	placeholder?: string
	showCheckbox?: boolean
}

export const Dropdown: React.FC<DropdownProps> = observer(
	({ options, label, onChange, placeholder, value, showCheckbox }) => {
		const [isIdMode, setIsIdMode] = useState(false)

		const { store } = useContext(Context)

		const toggleIdMode = useCallback(() => setIsIdMode(prev => !prev), [])

		const renderSelect = useMemo(
			() => (
				<select
					value={value}
					onChange={e => onChange(e.target.value)}
					className='rounded-md w-full border-2 px-4 py-2 border-[#D9D9D9] outline-none transition-colors delay-75 duration-150 focus:border-blue-600'
				>
					{placeholder && (
						<option value='' disabled>
							{placeholder}
						</option>
					)}
					{store.isLoading ? (
						<option value='' key='loading'>
							Loading...
						</option>
					) : (
						<>
							{options.map(option => {
								if (typeof option == 'string') {
									return (
										<option key={option} value={option}>
											{isIdMode ? option.split(' ')[0] : option}
										</option>
									)
								} else if (option.label && option.value) {
									return (
										<option key={option.value} value={option.value}>
											{isIdMode ? option.label.split(' ')[0] : option.label}
										</option>
									)
								}
							})}
						</>
					)}
				</select>
			),
			[isIdMode, options, placeholder, value, onChange, store.isLoading]
		)

		const renderLabel = useMemo(() => label && <label>{label}</label>, [label])

		return (
			<div className='flex flex-col w-full'>
				{showCheckbox ? (
					<div className='grid grid-cols-[4fr,1fr] gap-x-3'>
						<div className='flex flex-col'>
							{renderLabel}
							{renderSelect}
						</div>
						<Checkbox
							label='Use id'
							checked={isIdMode}
							onChange={toggleIdMode}
						/>
					</div>
				) : (
					<>
						{renderLabel}
						{renderSelect}
					</>
				)}
			</div>
		)
	}
)

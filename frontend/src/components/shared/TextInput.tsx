import type { TextInputType } from '../../types'

const TextInput: TextInputType = ({ label, value, setter, placeholder }) => {
	return (
		<div className='flex flex-col'>
			<label htmlFor={label}>{label}</label>
			<input
				type='text'
				name={label}
				className='outline-none bg-transparent border-slate-200 border-2 rounded-md md:p-2 placeholder:text-black'
				id={label}
				value={value}
				onChange={e => setter(e.target.value)}
				placeholder={placeholder}
			/>
		</div>
	)
}

export default TextInput

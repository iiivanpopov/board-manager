import clsx from 'clsx'
import type { ButtonType } from '../../types'

const Button: ButtonType = ({ className, children, onClick, disabled }) => {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className={clsx(
				'p-1 md:p-2 rounded-md transition-[filter]',
				{ 'hover:brightness-75': !disabled },
				className,
				{ '!bg-gray-200': disabled }
			)}
		>
			{children}
		</button>
	)
}

export default Button

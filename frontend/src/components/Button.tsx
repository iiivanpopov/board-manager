import clsx from 'clsx'
import { memo, PropsWithChildren, useMemo } from 'react'

export const Button: React.FC<
	PropsWithChildren<{
		className?: string
		onClick: () => void
		disabled?: boolean
		color: 'red' | 'green' | 'blue'
	}>
> = memo(({ children, onClick, className, color, disabled }) => {
	const buttonClass = useMemo(() => {
		return clsx(
			'rounded-md shadow-md text-white transition-colors px-16 py-3 outline-none delay-75 duration-150 ease-in',
			{
				'opacity-50 cursor-not-allowed hover:bg-black bg-black': disabled,
				'bg-red-500 hover:bg-red-600': color === 'red' && !disabled,
				'bg-green-500 hover:bg-green-600': color === 'green' && !disabled,
				'bg-blue-500 hover:bg-blue-600': color === 'blue' && !disabled,
			},
			className
		)
	}, [color, disabled, className])

	return (
		<button className={buttonClass} disabled={disabled} onClick={onClick}>
			{children}
		</button>
	)
})

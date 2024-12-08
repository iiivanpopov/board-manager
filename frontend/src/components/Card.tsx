import clsx from 'clsx'
import { memo, PropsWithChildren } from 'react'

export const Card: React.FC<
	PropsWithChildren<{
		className?: string
	}>
> = memo(({ children, className }) => {
	return (
		<div
			className={clsx(
				'bg-gray-200 shadow-md rounded-lg flex justify-center',
				className
			)}
		>
			{children}
		</div>
	)
})

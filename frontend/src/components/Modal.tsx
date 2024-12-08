import clsx from 'clsx'
import React, { memo, PropsWithChildren } from 'react'
import ReactDOM from 'react-dom'

export const Modal: React.FC<
	PropsWithChildren<{
		isOpen: boolean
		onClose: () => void
		className?: string
	}>
> = memo(({ isOpen, onClose, children, className }) => {
	if (!isOpen) return null

	const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) onClose()
	}

	return ReactDOM.createPortal(
		<div
			className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10'
			onClick={handleOverlayClick}
		>
			<div
				className={clsx(
					'bg-gray-200 p-6 rounded-lg shadow-md w-full max-w-xs sm:max-w-md',
					className
				)}
			>
				{children}
			</div>
		</div>,
		document.body
	)
})

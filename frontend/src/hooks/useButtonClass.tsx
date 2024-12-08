import clsx from 'clsx'
import { useMemo } from 'react'

export const useButtonClass = (activeMode: string, currentMode: string) => {
	return useMemo(
		() =>
			clsx('hover:text-blue-600 transition delay-75 duration-150 ease-in', {
				'text-blue-600 hover:text-blue-800 font-bold':
					activeMode === currentMode,
			}),
		[activeMode, currentMode]
	)
}

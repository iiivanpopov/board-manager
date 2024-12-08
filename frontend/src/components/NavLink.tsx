import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import React, { memo, PropsWithChildren, useMemo } from 'react'
import { Link, useLocation } from 'react-router'

export const NavLink: React.FC<
	PropsWithChildren<{
		path: string
		icon?: IconProp
	}>
> = memo(({ children, path, icon }) => {
	const { pathname } = useLocation()

	const linkClass = useMemo(() => {
		return clsx(
			'flex items-center space-x-2 transition-colors ease-in delay-75 duration-150 hover:text-blue-600',
			{ 'text-blue-600 hover:text-blue-800 font-bold': pathname === path }
		)
	}, [pathname, path])

	const iconElement = useMemo(() => {
		if (icon) {
			return <FontAwesomeIcon icon={icon} />
		}
		return null
	}, [icon])

	return (
		<Link to={path} className={linkClass}>
			<span>{children}</span>
			{iconElement}
		</Link>
	)
})

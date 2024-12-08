import { PropsWithChildren } from 'react'
import { Header } from './Header'

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className='font-inter flex flex-col items-center'>
			<Header />
			{children}
		</div>
	)
}

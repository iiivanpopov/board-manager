import clsx from 'clsx'
import { useCallback, useContext, useMemo, useState } from 'react'
import { useNavigate } from 'react-router'
import { Context } from '../main'
import { Button } from './Button'
import { Card } from './Card'
import { Dropdown } from './Dropdown'
import { Input } from './Input'

export const LoginForm: React.FC<{ className?: string }> = ({ className }) => {
	const [password, setPassword] = useState('')
	const [worker, setWorker] = useState('')
	const [error, setError] = useState('')
	const navigate = useNavigate()

	const handlePasswordChange = useCallback(
		(value: string) => setPassword(value),
		[]
	)

	const handleWorkerChange = useCallback(
		(value: string) => setWorker(value),
		[]
	)

	const isFormValid = useMemo(
		() => Boolean(worker && password),
		[worker, password]
	)
	const options = useMemo(() => ['1', '2'], [])

	const { store } = useContext(Context)

	const handleLogin = useCallback(async () => {
		try {
			await store.login(password, worker)
		} catch (error) {
			setError(error?.message)
		}
		if (store.isAuth) navigate('/')
	}, [password, worker])

	return (
		<Card className='mt-10 h-96 w-3/4 md:w-96 px-10 py-5'>
			<div
				className={clsx(
					'flex flex-col items-center justify-between h-full',
					className
				)}
			>
				<div className='flex flex-col items-center justify-center'>
					<h1 className='text-2xl md:text-3xl'>Login</h1>
					{error && <p className='text-red-600'>{error}</p>}
				</div>
				<Input
					value={password}
					onChange={handlePasswordChange}
					label='Password'
					type='password'
					placeholder='Enter a password'
				/>

				<Dropdown
					onChange={handleWorkerChange}
					options={options}
					value={worker}
					placeholder='Enter a work station'
					label='Work station'
				/>

				<Button disabled={!isFormValid} onClick={handleLogin} color='blue'>
					Login
				</Button>
			</div>
		</Card>
	)
}

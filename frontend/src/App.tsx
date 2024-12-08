import { useContext, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Context } from './main'
import Login from './pages/Login'
import { Main } from './pages/Main'
import Registration from './pages/Registration'

function App() {
	const { store } = useContext(Context)

	useEffect(() => {
		if (localStorage.getItem('token') && localStorage.getItem('refreshToken')) {
			store.checkAuth()
		}
		const worker = localStorage.getItem('worker')
		if (worker) {
			store.setWorker(worker)
		}
		store.fetchOptions()
	}, [])

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='login' element={<Login />} />
				<Route path='registration' element={<Registration />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App

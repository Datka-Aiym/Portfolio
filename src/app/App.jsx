import React from 'react'
import Header from '../widgets/Header/index'
import Myrouter from '../app/routes.jsx'
import { Layout } from '../widgets/Layout/Layuot.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css'

export { Layout }

export function App() {
	return (
		<div>
			<Myrouter />
		</div>
	)
}

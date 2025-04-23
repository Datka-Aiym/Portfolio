import React from 'react'
import Myrouter from '../app/routes.jsx'
import { Layout } from '../widgets/Layout/Layout.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css'

export { Layout }

export function App() {
	return (
		<div>
			<Myrouter />
		</div>
	)
}

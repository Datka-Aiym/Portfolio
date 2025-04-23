import React from 'react'
import { useRoutes } from 'react-router-dom'
import Projec from '../pages/Progect/index.jsx'
import Skills from '../pages/Skills/index.jsx'
import NotFound from '../widgets/NotFound/index.jsx'
import { Layout } from '../widgets/Layout/Layout.jsx'
import { Home } from '../pages/Home/Home'

export default function Myroutes() {
	const routes = useRoutes([
		{
			path: '/',
			element: <Layout />,
			children: [
				{ path: '/', element: <Home /> },
				{ path: 'projec', element: <Projec /> },
				{ path: 'skills', element: <Skills /> },
				{ path: '*', element: <NotFound /> },
			],
		},
	])
	return routes
}

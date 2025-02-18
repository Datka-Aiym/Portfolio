import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { App } from './app/App.jsx'
import './app/routes.jsx'
import './app/index.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
)

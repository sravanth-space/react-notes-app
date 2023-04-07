import { createRoot } from 'react-dom/client'
import React from 'react';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const container = document.getElementById('root')

const root = createRoot(container)

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)

serviceWorkerRegistration.register();
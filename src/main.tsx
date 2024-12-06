import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Todoapp from './components/Todoapp/Todoapp';
import './index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<div className='container'>
			<Todoapp />
		</div>
	</StrictMode>
);

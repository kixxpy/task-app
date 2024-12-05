import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Headling from './components/Headling/Headling';
import './index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<div className='container'>
			<Headling size='big'>Task App</Headling>
			<Headling size='smile'>Task App</Headling>
		</div>
	</StrictMode>
);

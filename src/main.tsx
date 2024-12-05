import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Headling from './components/Headling/Headling';
import Wrapper from './components/Wrapper/Wrapper';
import './index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<div className='container'>
			<Headling size='big'>Task App</Headling>
			<Wrapper>
				<Headling size='smile'>Task App</Headling>
			</Wrapper>
		</div>
	</StrictMode>
);

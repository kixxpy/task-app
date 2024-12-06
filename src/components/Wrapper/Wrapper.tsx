import styles from './Wrapper.module.css';
import { WrapperProps } from './Wrapper.props';

function Wrapper({ children }: WrapperProps): JSX.Element {
	return <div className={styles['wrapper']}>{children}</div>;
}

export default Wrapper;

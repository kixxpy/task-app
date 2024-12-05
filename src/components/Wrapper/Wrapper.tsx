import styles from './Wrapper.module.css';
import { WrapperProps } from './Wrapper.props';

function Wrapper({ children }: WrapperProps) {
	return <div className={styles['wrapper']}>{children}</div>;
}

export default Wrapper;

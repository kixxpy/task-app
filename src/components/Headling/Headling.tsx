import cn from 'classnames';
import styles from './Headling.module.css';
import { HeadlingProps } from './Headling.props';

function Headling({ size, children }: HeadlingProps) {
	return (
		<div
			className={cn(styles.headling, {
				[styles.big]: size === 'big',
				[styles.medium]: size === 'smile',
			})}
		>
			{children}
		</div>
	);
}

export default Headling;

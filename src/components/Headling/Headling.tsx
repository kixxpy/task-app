import cn from 'classnames';
import styles from './Headling.module.css';
import { HeadlingProps } from './Headling.props';

function Headling({ size, children, className }: HeadlingProps) {
	return (
		<div
			className={cn(styles.headling, className, {
				[styles.big]: size === 'big',
				[styles.medium]: size === 'smile',
			})}
		>
			{children}
		</div>
	);
}

export default Headling;

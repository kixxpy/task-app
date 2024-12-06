import styles from './Todo.module.css';
import { TodoProps } from './Todo.props';

function Todo({ item, onDelete }: TodoProps) {
	return (
		<>
			<div className={styles['todo']}>
				<span className={styles['text']}>{item}</span>
				<button className={styles['button']} onClick={onDelete}>
					<img src='/delite.svg' alt='Иконка удаления' />
				</button>
			</div>
		</>
	);
}

export default Todo;

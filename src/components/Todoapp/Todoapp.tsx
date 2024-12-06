import { useState } from 'react';
import Headling from '../Headling/Headling';
import Todo from '../Todo/Todo';
import styles from './Todoapp.module.css';

function Todoapp() {
	const [todo, setTodo] = useState<string>('');
	const [todos, setTodos] = useState<string[]>([]);

	const addTodo = (e: React.FormEvent): void => {
		e.preventDefault();
		if (todo.length > 0) {
			setTodos([...todos, todo]);
			setTodo('');
		}
	};

	const deleteTodo = (item: string) => {
		setTodos(todos.filter(todo => todo !== item));
	};

	return (
		<>
			<div>
				<Headling className={styles['headling']} size='big'>
					Task App
				</Headling>
				<div className={styles['input']}>
					<input
						value={todo}
						onChange={e => setTodo(e.target.value)}
						type='text'
						placeholder='Введите новую задачу'
						onKeyDown={e => e.key === 'Enter' && addTodo(e)}
					></input>
					<button onClick={addTodo}>
						<img src='/add.svg' alt='Иконка добавить задачу' />
					</button>
				</div>
			</div>
			{todos.length > 0 && (
				<div className={styles['count']}>Число задач - {todos.length}</div>
			)}
			<div className={styles['todo-list']}>
				<div>
					{todos.map(item => (
						<Todo key={item} item={item} onDelete={() => deleteTodo(item)} />
					))}
				</div>
			</div>
		</>
	);
}

export default Todoapp;

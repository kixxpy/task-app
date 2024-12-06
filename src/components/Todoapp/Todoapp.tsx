import { useState } from 'react';
import Todo from '../Todo/Todo';
import styles from './Todoapp.module.css';

function Todoapp() {
	const [todo, setTodo] = useState<string>('');
	const [todos, setTodos] = useState<string[]>([]);

	const addTodo = (e: React.FormEvent): void => {
		e.preventDefault();
		if (todo.length > 1) {
			setTodos([...todos, todo]);
			setTodo('');
		}
	};

	const deleteTodo = (item: string) => {
		setTodos(todos.filter(todo => todo !== item));
	};

	return (
		<>
			<div className={styles['input']}>
				<input
					value={todo}
					onChange={e => setTodo(e.target.value)}
					type='text'
					placeholder='Введите новую задачу'
				></input>
				<button onClick={addTodo}>
					<img src='/add.svg' alt='Иконка добавить задачу' />
				</button>
			</div>
			<div>
				{todos.length > 0 && <div>Запланированных задач - {todos.length}</div>}
				{todos.map((item, index) => (
					<Todo item={item} key={index} onDelete={() => deleteTodo(item)} />
				))}
			</div>
		</>
	);
}

export default Todoapp;

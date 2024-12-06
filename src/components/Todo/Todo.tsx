import { TodoProps } from './Todo.props'

function Todo({ item, key, onDelete }: TodoProps) {
	return (
		<div>
			<span key={key}>{item}</span>
			<button onClick={onDelete}>Удалить</button>
		</div>
	);
}

export default Todo;

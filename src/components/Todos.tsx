import {Todo} from '../App'

interface Props {
    todos: Todo[];
    toggleTodo: (selectTodo: Todo) => void;
    removeTodo: (selectTodo: Todo) => void
}

const Todos = ({todos, toggleTodo, removeTodo}: Props) => {
    return (
        <div>
            {
                todos.map((todo) => (
                    <article key={todo.text}>
                        <label htmlFor="todo">
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                id="todo"
                                onChange={() => toggleTodo(todo)}
                            />
                            {todo.text}
                        </label>
                        <button onClick={() => removeTodo(todo)}>Eliminar</button>
                    </article>
                ))
            }
        </div>
    )
}

export default Todos

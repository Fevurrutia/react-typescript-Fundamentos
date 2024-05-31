import { useState } from "react"
import FormAddTodo from "./components/FormAddTodo"
import Todos from "./components/Todos"

export interface Todo {
  text: string,
  completed: boolean
}

const initialTodos = [
  {
    text: 'Learn React',
    completed: false
  },
  {
    text: 'Laern TypeScript',
    completed: false
  }
]

const App = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos)

  const addTodo = (text: string) => {
    const newTodo = {
      text,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  const toggleTodo = (selectTodo: Todo) => {
    setTodos(prevTodos => {
      return prevTodos.map(todo => {
        if(todo === selectTodo){
          return{
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    })
  }

  const removeTodo = (selectTodo: Todo) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo !== selectTodo)
    })
  }

  return (
    <div className="container">
      <h1>Todo</h1>

      <FormAddTodo addTodo={addTodo}/>

      <Todos 
        todos={todos} 
        toggleTodo={toggleTodo} 
        removeTodo={removeTodo}
      />

    </div>
  )
}

export default App

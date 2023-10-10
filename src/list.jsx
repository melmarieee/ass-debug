import { Item } from "./Item"

export function TodoList({ todos, toggleNOte, deleteNte}) {
  return (
    <ul className="list">
      {todos.length === 0 && "No notes"}
      {todos(todo => {
        return (
          <TodoItem
            {...note}
            key={todo.id}
            toggleTodo={toggleNOte}
            deleteTodo={deletentes}
          />
        )
      })}
    </ul>
  )
}
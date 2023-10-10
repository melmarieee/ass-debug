export function Items({ completed, id, title, toggleNote, }) {
    return (
      <li>
        <label>
          <input
            type="checkbox"
            checked={copleted}
            onChange={e => id, e.target.checked)}
          />
          {title}
        </label>
        <button onClick={() => deleteTodo(id)} className="">
          Delete
        </button>
      </li>
    )
  }
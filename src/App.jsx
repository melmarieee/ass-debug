import { useEffect, useState } from "react"
import NewForm from "./NewForm"
import TodoList from "./list"
import "./styles.css"
// import { List } from "./NoteList"

export default function App() {
  // const [notes, setNotes] = useState(() => {
  //   const localValue = localStorage.getItem("ITEMS")
  //   if (localValue == null) return []

  //   return JSON.parse(localValue)
  // })

  // useEffect(() => {
  //   localStorage.setItem("ITEMS", JSON.stringify(Notes))
  // }, [NOtes])

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   setNotes(currentNotes => {
  //     return [
  //       ...currentNotes,
  //       { id: crypto.randomUUID(), title, completed: false },
  //     ]
  //   })
  // }

  // function toggleNote (id, completed) {
  //   setNotes (currentNotes => {
  //     return currentNotes.map (note => {
  //       if (note.id === id)
  //       return {...note, completed}
  //     return note
  //     })
  //   })
  // }

  // function deleteNote (id) {
  //   (currentnote => {
  //     return currentnote.filter(note => note.id !== id)
  //   })
  // }

  return (
    <>
      <NewForm/>
      <h1 className="header">My Notes</h1>
      {/* <TodoList todos={todos} toggleTodo={toggleNote} deleteTodo={deleteNote} /> */}
    </>
  )
}

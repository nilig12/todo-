import React, { useState, type FormEvent } from 'react'
import { useTodos } from '../store/todos'

const AddToDo = () => {
    const [todo, setTodo] = useState("");
    const {handleAddToDo} = useTodos();

    const handleFormSubmit = (e: FormEvent<HTMLElement>) => {
      e.preventDefault();

    //   function call
    handleAddToDo(todo)
    setTodo("") // empty string
    }

    

  return (
    <form onSubmit={handleFormSubmit} >
        <input type="text"  value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button type='submit' >Add</button>
    </form>
  )
}

export default AddToDo

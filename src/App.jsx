import { useState } from "react";
import "./styles.css";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

function App() {

  const [todos, setTodos] = useState([]);
  
  function addTodo(title) {
    setTodos(currentTodo => {
      return [
        ...currentTodo, 
        {id: crypto.randomUUID(), title: title, completed:false}
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodo => {
      return currentTodo.map( todo =>{
        if (todo.id === id) {
          return {...todo, completed}
        }
        return todo
      })
    })
  }
  function deleteT(id) {
    setTodos(currentTodo => {
      return currentTodo.filter(todo => todo.id !== id)
    })
  }
  return (
  <>
    <TodoForm onSubmit={addTodo} />
    <h1 className="header">TODO List</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteT={deleteT}/>
  </>
)}

export default App;
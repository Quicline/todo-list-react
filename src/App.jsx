import { useState } from "react";
import "./styles.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);
  
  function handleSubmit(e) {
    e.preventDefault();

    setTodos(currentTodo => {
      return [
        ...currentTodo, 
        {id: crypto.randomUUID(), title: newItem, completed:false}
      ]
    })

    setNewItem("")
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
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input value={newItem} onChange={v=> setNewItem(v.target.value)} type="text" id="item" />
      </div>
      <button className="btn">Add Item</button>
    </form>
    <h1 className="header">TODO List</h1>
    <ul className="list">
      {todos.map(todo => {
        return (
          <li key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed} onChange={ v => toggleTodo(todo.id, v.target.checked)} />
              {todo.title}
            </label>
            <button onClick={()=>deleteT(todo.id)} className="btn btn-danger">DELETE</button>
          </li>
        );
      })}
      
    </ul>
  </>
)}

export default App;
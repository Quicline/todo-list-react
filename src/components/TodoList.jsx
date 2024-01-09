/* eslint-disable react/prop-types */
import { TodoItem } from "./TodoItem";

export function TodoList({todos, toggleTodo, deleteT}){
    return (
    <ul className="list">
      {todos.length === 0 && "Add some items to see the list!"}
      {todos.map(todo => {
        return (
          <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteT={deleteT}/>
        );
      })}
      
    </ul>
    )
}
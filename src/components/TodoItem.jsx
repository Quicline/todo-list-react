// eslint-disable-next-line react/prop-types
export function TodoItem({completed, id, title, toggleTodo, deleteT}) {
    return (
        <li key={id}>
            <label>
              <input type="checkbox" checked={completed} onChange={ v => toggleTodo(id, v.target.checked)} />
              {title}
            </label>
            <button onClick={()=>deleteT(id)} className="btn btn-danger">DELETE</button>
        </li>
    )
}
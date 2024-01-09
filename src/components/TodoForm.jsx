/* eslint-disable react/prop-types */

import { useState } from "react";


export function TodoForm(props) {
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if ( newItem === "" )return
        
        props.onSubmit(newItem)
    
        setNewItem("")
      }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input value={newItem} onChange={v=> setNewItem(v.target.value)} type="text" id="item" />
            </div>
        <button className="btn">Add Item</button>
        </form>
    );
}
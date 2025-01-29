import React from "react";

function TodoItems({id, title, completed, toggleTodo, deleteTodo}) {
  return (
    <>
      <div className="list-element">
        <li>
          <label className="list-item">
            <input
              type="checkbox"
              checked={completed}
              onChange={(e) => toggleTodo(id, e.target.checked)}
            />
            {title}
          </label>
        </li>
        <button className="del-btn" onClick={() => deleteTodo(id)}>Delete</button>
      </div>
    </>
  );
}

export default TodoItems;

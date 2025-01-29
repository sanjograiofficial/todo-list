import React, { useState } from "react";

function Form({onSubmit}) {
  
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(newItem);

    setNewItem("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="item" className="item-text">New Item</label>
        <input
          type="text"
          id="item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit" className="submit-btn">Add</button>
      </form>
    </>
  );
}

export default Form;

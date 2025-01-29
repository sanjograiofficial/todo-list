import React, { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
function App() {
  const [todos, setTodos] = useState(()=>{
    const localValue = localStorage.getItem("ITEMS");
    if(localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos])

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false,
        },
      ];
    });
  }
  const toggleTodo = (id, completed) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed,
          };
        }
        return todo;
      });
    });
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };
  return (
    <>
      <div class="container">
        <Form onSubmit={addTodo}/>
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
      </div>
    </>
  );
}

export default App;

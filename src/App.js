// App.js
import React, { useState, useEffect } from "react";
import TodoForm from "./components/todoForm";
import TodoItem from "./components/todoItem";
import TodoFilter from "./components/todoFilter";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState({ category: "All", status: "All" });

  // Load todos from localStorage on initial render
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const editTodo = (id, updatedTodo) => {
    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    const categoryMatch =
      filter.category === "All" || todo.category === filter.category;
    const statusMatch =
      filter.status === "All" ||
      (filter.status === "Completed" && todo.completed) ||
      (filter.status === "Incomplete" && !todo.completed);
    return categoryMatch && statusMatch;
  });

  return (
    <div className="app">
      <h1>To-Do List Dashboard</h1>
      <TodoForm addTodo={addTodo} />
      <TodoFilter setFilter={setFilter} />
      <div className="todo-list">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

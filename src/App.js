import React, { useState, useEffect } from "react";
import TodoForm from "./components/todoForm";
import TodoItem from "./components/todoItem";
import TodoFilter from "./components/todoFilter";
import "./App.css";

const App = () => {
   const [todos, setTodos] = useState(() => {
     const savedTodos = localStorage.getItem("todos");
     return savedTodos ? JSON.parse(savedTodos) : [];
   });

  const [filter, setFilter] = useState({ category: "All", status: "All" });
  const [search, setSearch] = useState("");



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
    const searchMatch = todo.text.toLowerCase().includes(search.toLowerCase());
    return categoryMatch && statusMatch && searchMatch;
  });

  return (
    <div className="w-full max-w-[800px] m-auto p-[30px]">
      <h1 className="font-bold text-3xl text-blue ">To-Do List Dashboard</h1>
      <div className="w-full m-auto shadow-md rounded mt-10 p-6 md:w-full">
        <TodoForm addTodo={addTodo} />
        <div className="">
          <TodoFilter setFilter={setFilter} />
          <div className="mt-4">
            <input
              type="text"
              placeholder="Search tasks..."
              className="border border-gray rounded-[10px] p-3 focus:border-blue focus:outline-none focus:shadow-outline"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
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
};

export default App;

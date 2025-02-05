// components/TodoFilter.jsx
import React from "react";

function TodoFilter({ setFilter }) {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
  };

  return (
    <div className="todo-filter">
      <select name="category" onChange={handleFilterChange}>
        <option value="All">All Categories</option>
        <option value="Personal">Personal</option>
        <option value="Work">Work</option>
        <option value="Shopping">Shopping</option>
      </select>
      <select name="status" onChange={handleFilterChange}>
        <option value="All">All Statuses</option>
        <option value="Completed">Completed</option>
        <option value="Incomplete">Incomplete</option>
      </select>
    </div>
  );
}

export default TodoFilter;

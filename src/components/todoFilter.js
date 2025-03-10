import React from "react";

const TodoFilter = ({ setFilter }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
  };

  return (
      <div className="flex gap-x-5 mt-4">
        <select
          className="border border-gray rounded-[10px] p-3"
          name="category"
          onChange={handleFilterChange}
        >
          <option value="All">All Categories</option>
          <option value="Personal">Personal</option>
          <option value="Work">Work</option>
          <option value="Shopping">Shopping</option>
        </select>
        <select
          className="border border-gray rounded-[10px] p-3"
          name="status"
          onChange={handleFilterChange}
        >
          <option value="All">All Status</option>
          <option value="Completed">Completed</option>
          <option value="Incomplete">Incomplete</option>
        </select>
      </div>
  );
};

export default TodoFilter;

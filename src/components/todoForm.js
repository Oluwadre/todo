import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [errors, setErrors] = useState({}); // State for error messages

  const validateForm = () => {
    const newErrors = {};

    // Validate task title
    if (!text.trim()) {
      newErrors.text = "Task title is required.";
    }

    // Validate category
    if (!["Personal", "Work", "Shopping"].includes(category)) {
      newErrors.category = "Invalid category selected.";
    }

    // Validate priority
    if (!["Low", "Medium", "High"].includes(priority)) {
      newErrors.priority = "Invalid priority selected.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    if (!validateForm()) {
      return; // Stop submission if validation fails
    }

    // Add the new todo
    const newTodo = {
      id: Date.now(),
      text,
      category,
      priority,
      completed: false,
    };
    addTodo(newTodo);
    setText("");
    setCategory("");
    setPriority("");
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="w-full py-3">
        <input
          type="text"
          placeholder="Add a new task"
          className="w-full border border-gray rounded-[10px] p-3 focus:border-blue focus:outline-none focus:shadow-outline"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {errors.text && <span className="text-red">{errors.text}</span>}
      </div>
      <div className="w-full flex flex-wrap justify-between items-center md:flex-nowrap">
        <div>
          <select
            value={category}
            className="w-full border border-gray rounded-[10px] p-3"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
            <option value="Shopping">Shopping</option>
          </select>
          {errors.category && (
            <span className="text-red">{errors.category}</span>
          )}
        </div>
        <div>
          <select
            value={priority}
            className="w-full border border-gray rounded-[10px] p-3"
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="">Select Priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          {errors.priority && (
            <span className="text-red">{errors.priority}</span>
          )}
        </div>
        <div className="mt-4 md:mt-0">
          <button
            className="text-white bg-blue rounded-[10px] p-3"
            type="submit"
          >
            Add Task
          </button>
        </div>
      </div>
    </form>
  );
}

export default TodoForm;

import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Personal");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    const newTodo = {
      id: Date.now(),
      text,
      category,
      priority,
      completed: false,
    };
    addTodo(newTodo);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="w-full py-3">
        <input
          type="text"
          placeholder="Add a new task"
          value={text}
          className="w-full border border-gray rounded-[10px] py-2 px-3 focus:border-blue focus:outline-none focus:shadow-outline"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="w-full flex justify-between">
        <select
          className="w-[30%] border border-gray rounded-[10px] p-3"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Personal">Personal</option>
          <option value="Work">Work</option>
          <option value="Shopping">Shopping</option>
        </select>
        <select
          className="w-[30%] border border-gray rounded-[10px] p-3"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      <button className="w-[30%] text-white bg-blue rounded-[10px] p-3" type="submit">
        Add Task
      </button>
      </div>
    </form>
  );
};

export default TodoForm;

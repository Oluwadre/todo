import React, { useState } from "react";

const TodoItem = ({ todo, editTodo, deleteTodo, toggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(todo.id, { ...todo, text: updatedText });
    }
    setIsEditing(!isEditing);
  };

  return (
    <div
      className={`lg:w-full mt-4 border-[2px] p-[10px] border-gray rounded-[10px] ${todo.completed ? "line-through opacity-[0.7]" : ""}`}
    >
      <div className="md:w-full md:flex  md:justify-between md:items-center ">
        <div className="md:w-1/2">
          {isEditing ? (
            <input
              type="text"
              className="border border-gray rounded-[10px] p-3 focus:border-blue focus:outline-none focus:shadow-outline"
              value={updatedText}
              onChange={(e) => setUpdatedText(e.target.value)}
            />
          ) : (
            <span className="w-1/2">{todo.text}</span>
          )}
        </div>
        <div className="w-full mt-3 flex justify-between items-center lg:w-full">
          <span>{todo.category}</span>
          <span>{todo.priority}</span>
          <button
            className="text-white bg-blue rounded-[10px] p-2"
            onClick={() => toggleComplete(todo.id)}
          >
            {todo.completed ? "Undo" : "Complete"}
          </button>
          <button
            className="text-white bg-blue rounded-[10px] p-2"
            onClick={handleEdit}
          >
            {isEditing ? "Save" : "Edit"}
          </button>
          <button
            className="text-white bg-blue rounded-[10px] p-2"
            onClick={() => deleteTodo(todo.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;

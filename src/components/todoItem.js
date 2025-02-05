import React, { useState } from "react";

const TodoItem =({ todo, editTodo, deleteTodo, toggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(todo.id, { ...todo, text: updatedText });
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      {isEditing ? (
        <input
          type="text"
          className="border border-gray rounded-[10px] p-3 focus:border-blue focus:outline-none focus:shadow-outline"
          value={updatedText}
          onChange={(e) => setUpdatedText(e.target.value)}
        />
      ) : (
        <span>{todo.text}</span>
      )}
      <span>{todo.category}</span>
      <span>{todo.priority}</span>
      <button className="text-white bg-blue rounded-[10px] p-2" onClick={() => toggleComplete(todo.id)}>
        {todo.completed ? "Undo" : "Complete"}
      </button>
      <button className="text-white bg-blue rounded-[10px] p-2" onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
      <button className="text-white bg-blue rounded-[10px] p-2" onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
// components/TodoItem.jsx
import React, { useState } from "react";

function TodoItem({ todo, editTodo, deleteTodo, toggleComplete }) {
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
          value={updatedText}
          onChange={(e) => setUpdatedText(e.target.value)}
        />
      ) : (
        <span>{todo.text}</span>
      )}
      <span>{todo.category}</span>
      <span>{todo.priority}</span>
      <button onClick={() => toggleComplete(todo.id)}>
        {todo.completed ? "Undo" : "Complete"}
      </button>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
import React from "react";

export const InputField = ({text, setText, addTodo}) => {
  return (
    <div className="input-todo-container">
      <p className="todo-text__add">Add a new task</p>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Task Text"
        className="input"
      />
      <p className="todo-text__question">
        What do we do, how much time do we spend, what result do we get.
      </p>
      <button className="btn" onClick={addTodo}>
        Add
      </button>
    </div>
  );
};

export default InputField;

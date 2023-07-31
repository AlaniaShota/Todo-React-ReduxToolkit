import React from "react";
import { useDispatch } from "react-redux";
import { todoRemove, toggleTodoComplete } from "../store/todoSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({ id, text, complete }) => {
  const dispatch = useDispatch();

  return (
    <>
      <li className="todo-content__list" key={id}>
        <input
          type="checkbox"
          className="checkbox"
          checked={complete}
          onChange={() => dispatch(toggleTodoComplete({ id }))}
        />

        <FontAwesomeIcon
          icon={faTrashCan}
          className="trash-icon"
          onClick={() => dispatch(todoRemove({ id }))}
        />
        <span className="todo-text">{text}</span>
      </li>
    </>
  );
};

export default TodoItem;

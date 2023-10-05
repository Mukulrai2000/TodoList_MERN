import React, { Fragment, useState } from "react";

import { useDispatch } from "react-redux";

import { toggleTodo, updateTodo, deleteTodo } from "../redux/actions";

const TodoListing = ({ todo }) => {
  const dispatch = useDispatch();
  const [editClick, setEditClick] = useState(false);
  const [editText, setEditText] = useState(todo?.data);

  const handleEdit = (e) => {
    e.preventDefault();

    setEditClick(!editClick);
    dispatch(updateTodo(todo?._id, editText));
  };

  return (
    <Fragment>
      <li
        className="task"
        onClick={() => dispatch(toggleTodo(todo?._id))}
        style={{
          textDecoration: todo?.done ? "line-through" : "",
          color: todo?.done ? "#fff" : "",
        }}
      >
        <span style={{ display: editClick ? "none" : "" }}>{todo?.data}</span>

        <form
          style={{ display: editClick ? "inline" : "none" }}
          onSubmit={(e) => handleEdit(e)}
        >
          <input
            type="text"
            className="edit-todo"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        </form>

        <span className="icon" onClick={() => dispatch(deleteTodo(todo?._id))}>
          <i className="fas fa-trash" />
        </span>
        <span className="icon" onClick={() => setEditClick(!editClick)}>
          <i className="fas fa-pen" />
        </span>
      </li>
    </Fragment>
  );
};

export default TodoListing;

import React, { Fragment, useState } from "react";

import { useDispatch } from "react-redux";

import { toggleTodo } from "../redux/actions";

const TodoListing = ({ todo }) => {
  const dispatch = useDispatch();
  const [editClick, setEditClick] = useState(false);

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

        <form>
          <input type="text" value={todo?.data} />
        </form>

        <span className="icon">
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

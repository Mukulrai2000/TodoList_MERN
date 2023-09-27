import React, { Fragment, useState } from "react";

import { useDispatch } from "react-redux";

import { addNewTodo } from "../redux/actions";

const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewTodo());
  };

  return (
    <Fragment>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          className="input"
          placeholder="Enter new todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    </Fragment>
  );
};

export default TodoForm;

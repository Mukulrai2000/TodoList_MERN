import React, { Fragment, useState } from "react";

const TodoForm = () => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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

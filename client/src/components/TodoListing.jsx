import React, { Fragment } from "react";

const TodoListing = ({ todo }) => {
  return (
    <Fragment>
      <li className="task">
        <span>{todo?.data}</span>
        <span className="icon">
          <i className="fas fa-trash" />
        </span>
        <span className="icon">
          <i className="fas fa-pen" />
        </span>
      </li>
    </Fragment>
  );
};

export default TodoListing;

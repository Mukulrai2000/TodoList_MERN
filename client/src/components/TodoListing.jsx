import React, { Fragment } from "react";

const TodoListing = ({ todo }) => {
  return (
    <Fragment>
      <li>
        <span>{todo?.data}</span>
        <span>
          <i className="fas fa-trash" />
        </span>
        <span>
          <i className="fas fa-pen" />
        </span>
      </li>
    </Fragment>
  );
};

export default TodoListing;

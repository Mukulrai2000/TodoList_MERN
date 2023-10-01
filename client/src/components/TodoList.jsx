import React, { Fragment, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getAllTodos } from "../redux/actions/index";

import TodoListing from "./TodoListing";

const TodoList = () => {
  const dispatch = useDispatch();
  const allTodos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getAllTodos());
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <article>
        <ul>
          {allTodos.length > 0 ? (
            allTodos?.map((ele) => {
              return <TodoListing key={ele?._id} todo={ele} />;
            })
          ) : (
            <p>Currently there is no todo</p>
          )}
        </ul>
      </article>
    </Fragment>
  );
};

export default TodoList;

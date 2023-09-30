import React, { Fragment, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getAllTodos } from "../redux/actions/index";

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
              return <li key={ele?._id}>{ele?.data}</li>;
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

import React, { Fragment, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { ALL_TODOS, ACTIVE_TODOS, DONE_TODOS } from "../redux/actions/type";
import { getAllTodos } from "../redux/actions/index";

import TodoTabs from "./TodoTabs";
import TodoListing from "./TodoListing";

const TodoList = () => {
  const dispatch = useDispatch();
  const allTodos = useSelector((state) => state.todos);
  const currentTab = useSelector((state) => state.currentTab);

  const getTodos = () => {
    if(currentTab === ALL_TODOS){
      return allTodos;
    } else if(currentTab === ACTIVE_TODOS){
      return allTodos.filter(todo => !todo.done)
    } else if(currentTab === DONE_TODOS){
      return allTodos.filter(todo => todo.done) 
    }
  }

  useEffect(() => {
    dispatch(getAllTodos());
    getTodos();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <article>
        <div>
          <TodoTabs currentTab={currentTab} />
        </div>
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

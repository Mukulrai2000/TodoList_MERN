import React, { Fragment } from "react";

import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import "./App.css";

function App() {
  return (
    <Fragment>
      <Header />
      <TodoForm />
      <TodoList />
    </Fragment>
  );
}

export default App;

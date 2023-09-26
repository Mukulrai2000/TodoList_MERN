import React, { Fragment } from "react";

import Header from "./components/Header";
import TodoForm from "./components/TodoForm";

import "./App.css";

function App() {
  return (
    <Fragment>
      <Header />
      <TodoForm />
    </Fragment>
  );
}

export default App;

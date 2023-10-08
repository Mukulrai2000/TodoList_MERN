import React, { Fragment } from "react";

import { useDispatch } from "react-redux";

import { TABS } from "../redux/actions/type";
import { toggleTab } from "../redux/actions";

const TodoTabs = ({ currentTab }) => {
  const dispatch = useDispatch();

  return (
    <Fragment>
      {TABS.map((tab, index) => {
        return (
          <button
            key={index}
            className={tab === currentTab ? "button selected" : "button"}
            onClick={() => dispatch(toggleTab(tab))}
          >
            {tab}
          </button>
        );
      })}
    </Fragment>
  );
};

export default TodoTabs;

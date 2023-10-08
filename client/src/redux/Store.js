import { createStore, combineReducers, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import Thunk from "redux-thunk";

import { TodosReducer } from "./reducers/TodosReducer";
import { TabReducer } from "./reducers/TabReducer";

const reducer = combineReducers({
  todos: TodosReducer,
  currentTab: TabReducer,
});

const middleware = [Thunk];

const Store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;

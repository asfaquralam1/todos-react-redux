import { createStore, applyMiddleware } from "redux";
import counterReducer from "./services/reducers/counterReducer";
import todosrReducer from "./services/reducers/todosReducer";
import { thunk } from "redux-thunk";

const store = createStore(todosrReducer, applyMiddleware(thunk));

export default store;

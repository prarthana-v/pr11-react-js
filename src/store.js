import { applyMiddleware, createStore } from "redux";
import rootReducer from "./Redux/Reducers";
import { thunk } from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

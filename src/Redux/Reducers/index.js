import { combineReducers } from "redux";
import UserReducers from "./userReducer";

const rootReducer = combineReducers({
  Users: UserReducers,
});

export default rootReducer;

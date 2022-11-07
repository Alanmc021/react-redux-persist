import { combineReducers } from "redux";

import todos from "./todos";
import authReducer from './authReducer';

export default combineReducers({
  todos: todos,
  authReducer: authReducer
});

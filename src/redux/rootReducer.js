import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/userReducer";

const rootReducer = combineReducers({
  user: userReducer
});

export { rootReducer };

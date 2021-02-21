import { combineReducers } from "redux";
import authReducer from "./auth";
import { reducer as formReducer } from "redux-form";

const combinedReducers = combineReducers({
  auth: authReducer,
  form: formReducer,
});

export default combinedReducers;

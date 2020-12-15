import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import bookReducer from "./bookReducers";
import userReducer from "./userReducer";

export default combineReducers({
  form: formReducer,
  books: bookReducer,
  user: userReducer,
});

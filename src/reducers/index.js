import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import bookReducer from "./bookReducers";
import userReducer from "./userReducer";
import bookDetailsReducer from "./bookDetailsReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  form: formReducer,
  books: bookReducer,
  user: userReducer,
  bookDetails: bookDetailsReducer,
  errorMessage: errorReducer,
});

import { CREATE_BOOK, FETCH_BOOKS, EDIT_BOOK, DELETE_BOOK } from "./../actions/type";
import _ from "lodash";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return { ...state, ..._.mapKeys(action.payload.getAllBooks, "bookName") };
    case EDIT_BOOK:
      return state;
    case CREATE_BOOK:
      return state;
    case DELETE_BOOK:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

export default reducer;

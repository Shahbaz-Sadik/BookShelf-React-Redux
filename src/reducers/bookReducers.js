import {  CREATE_BOOK, FETCH_BOOKS, FETCH_BOOK, EDIT_BOOK, DELETE_BOOK } from "./../actions/type";
import _ from "lodash";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return { ...state, ..._.mapKeys(action.payload.getAllBooks, "_id") };
    case FETCH_BOOK:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_BOOK:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_BOOK:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_BOOK:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

export default reducer;

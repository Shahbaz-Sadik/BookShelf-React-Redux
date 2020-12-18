import { CREATE_BOOK_ERROR, EDIT_BOOK_ERROR } from "../actions/type";

const initialState = {
  errorMessage: {
    message: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK_ERROR:
      return { ...state, errorMessage: action.payload };
    case EDIT_BOOK_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

export default reducer;

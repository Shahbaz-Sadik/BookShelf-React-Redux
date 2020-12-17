import { FETCH_BOOK } from "./../actions/type";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_BOOK:
      return { ...state, Details: action.payload };
    default:
      return state;
  }
};

export default reducer;

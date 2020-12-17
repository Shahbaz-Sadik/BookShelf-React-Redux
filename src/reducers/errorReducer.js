import { ERROR } from "../actions/type";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case ERROR:
      return { ...state, errMessage: action.payload.message };
    default:
      return state;
  }
};

export default reducer;

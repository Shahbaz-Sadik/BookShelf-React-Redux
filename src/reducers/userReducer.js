import { LOG_IN } from "./../actions/type";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...state, token: action.payload.token };
    default:
      return state;
  }
};

export default reducer;

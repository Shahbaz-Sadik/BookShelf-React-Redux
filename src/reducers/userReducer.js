import { LOG_IN, LOG_OUT } from "./../actions/type";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...state, token: action.payload.token };
    case LOG_OUT:
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

export default reducer;

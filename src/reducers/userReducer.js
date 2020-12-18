import { LOG_IN, LOG_OUT, LOG_IN_FAILED, SIGN_UP_FAILED, SIGN_UP } from "./../actions/type";
const initialState = {
  loginFailed: false,
  signUpFailed: false,
  error: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...state, token: action.payload.token };
    case SIGN_UP:
      return { ...state, token: action.payload.token };
    case LOG_OUT:
      return { ...state, loginFailed: false, token: action.payload };
    case LOG_IN_FAILED:
      return { ...state, loginFailed: true, error: action.payload };
    case SIGN_UP_FAILED:
      return { ...state, signUpFailed: true, error: action.payload };
    default:
      return state;
  }
};

export default reducer;

import bookshelf from "../apis/bookshelf";
import { SIGN_UP, LOG_IN, CREATE_BOOK, DELETE_BOOK, EDIT_BOOK, FETCH_BOOK, FETCH_BOOKS, LOG_OUT, ERROR } from "./type";
import history from "./../history";

export const createUser = (formValue) => async (dispatch) => {
  const response = await bookshelf.post("api/v1/users/signup", formValue);
  window.localStorage.setItem("token", JSON.stringify(response.data.token));
  //const token = JSON.parse(window.localStorage.getItem("token"));

  //console.log(token);
  dispatch({ type: SIGN_UP, payload: response.data });
  history.push("/");
};

export const userLogin = (formValue) => async (dispatch) => {
  try {
    const response = await bookshelf.post("api/v1/users/login", formValue);
    window.localStorage.setItem("token", JSON.stringify(response.data.token));
    //const token = JSON.parse(window.localStorage.getItem("token"));

    console.log(response.data);

    dispatch({ type: LOG_IN, payload: response.data });
    history.push("/");
  } catch (err) {
    console.log(err);
  }
};

export const userLogOut = () => async (dispatch) => {
  window.localStorage.setItem("token", "");
  const token = window.localStorage.getItem("token");

  //console.log(token);
  dispatch({ type: LOG_OUT, payload: token });
  history.push("/");
};

export const fetchBooks = () => async (dispatch) => {
  const response = await bookshelf.get("api/v1/books");

  dispatch({ type: FETCH_BOOKS, payload: response.data });
};

export const createBook = (formValue, token) => async (dispatch) => {
  const response = await bookshelf.post("api/v1/books", formValue, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  //console.log(response.data);
  dispatch({ type: CREATE_BOOK, payload: response.data });
  history.push("/");
};

export const fetchBook = (id) => async (dispatch) => {
  const response = await bookshelf.get(`api/v1/books/${id}`);
  //console.log(response.data.bookDetails)

  dispatch({ type: FETCH_BOOK, payload: response.data.bookDetails });
};

export const editBook = (id, formValue, token) => async (dispatch) => {
  const response = await bookshelf.patch(`api/v1/books/${id}`, formValue, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  console.log(response);
  dispatch({ type: EDIT_BOOK, payload: response.data });
  history.push("/");
};

export const deleteBook = (id, token) => async (dispatch) => {
  await bookshelf.delete(`api/v1/books/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  dispatch({ type: DELETE_BOOK, payload: id });
  history.push("/");
};

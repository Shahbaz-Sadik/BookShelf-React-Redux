import bookshelf from "../apis/bookshelf";
import {
  SIGN_UP,
  LOG_IN,
  CREATE_BOOK,
  CREATE_BOOK_ERROR,
  DELETE_BOOK,
  EDIT_BOOK,
  EDIT_BOOK_ERROR,
  FETCH_BOOK,
  FETCH_BOOKS,
  LOG_OUT,
  LOG_IN_FAILED,
  SIGN_UP_FAILED,
} from "./type";
import history from "./../history";

export const createUser = (formValue) => async (dispatch) => {
  try {
    const response = await bookshelf.post("api/v1/users/signup", formValue);
    window.localStorage.setItem("token", JSON.stringify(response.data.token));

    dispatch({ type: SIGN_UP, payload: response.data });
    history.push("/");
  } catch (err) {
    dispatch({ type: SIGN_UP_FAILED, payload: err.response.data });
    history.push("/book/signup");
  }
};

export const userLogin = (formValue) => async (dispatch) => {
  try {
    const response = await bookshelf.post("api/v1/users/login", formValue);

    window.localStorage.setItem("token", JSON.stringify(response.data.token));

    dispatch({ type: LOG_IN, payload: response.data });
    history.push("/");
  } catch (err) {
    dispatch({ type: LOG_IN_FAILED, payload: err.response.data });
    history.push("/book/login");
  }
};

export const userLogOut = () => async (dispatch) => {
  window.localStorage.setItem("token", "");
  const token = window.localStorage.getItem("token");

  dispatch({ type: LOG_OUT, payload: token });
  history.push("/");
};

export const fetchBooks = () => async (dispatch) => {
  const response = await bookshelf.get("api/v1/books");

  dispatch({ type: FETCH_BOOKS, payload: response.data });
};

export const createBook = (formValue, token) => async (dispatch) => {
  try {
    token = token || JSON.parse(window.localStorage.getItem("token"));
    const response = await bookshelf.post("api/v1/books", formValue, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    dispatch({ type: CREATE_BOOK, payload: response.data });
    history.push("/");
  } catch (err) {
    dispatch({ type: CREATE_BOOK_ERROR, payload: err.response.data });
    history.push("/book/new");
  }
};

export const fetchBook = (id) => async (dispatch) => {
  const response = await bookshelf.get(`api/v1/books/${id}`);

  dispatch({ type: FETCH_BOOK, payload: response.data.bookDetails });
};

export const editBook = (id, formValue, token) => async (dispatch) => {
  try {
    token = token || JSON.parse(window.localStorage.getItem("token"));
    const response = await bookshelf.patch(`api/v1/books/${id}`, formValue, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: EDIT_BOOK, payload: response.data });
    history.push("/");
  } catch (err) {
    dispatch({ type: EDIT_BOOK_ERROR, payload: err.response.data });
    history.push(`/book/edit/${id}`);
  }
};

export const deleteBook = (id, token) => async (dispatch) => {
  token = token || JSON.parse(window.localStorage.getItem("token"));
  await bookshelf.delete(`api/v1/books/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  dispatch({ type: DELETE_BOOK, payload: id });
  history.push("/");
};

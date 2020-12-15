import bookshelf from "../apis/bookshelf";
import { SIGN_UP, LOG_IN, CREATE_BOOK, DELETE_BOOK, EDIT_BOOK, FETCH_BOOK, FETCH_BOOKS } from "./type";

export const createUser = (formValue) => async (dispatch) => {
  const response = await bookshelf.post("api/v1/users/signup", formValue);
  window.localStorage.setItem("token", JSON.stringify(response.data.token));
  const token = JSON.parse(window.localStorage.getItem("token"));

  console.log(token);
  dispatch({ type: SIGN_UP, payload: response.data });
};

export const userLogin = (formValue) => async (dispatch) => {
  const response = await bookshelf.post("api/v1/users/login", formValue);
  window.localStorage.setItem("token", JSON.stringify(response.data.token));
  const token = JSON.parse(window.localStorage.getItem("token"));

  console.log(token);
  dispatch({ type: LOG_IN, payload: response.data });
};

export const fetchBooks = () => async (dispatch) => {
  const response = await bookshelf.get("api/v1/books");

  dispatch({ type: FETCH_BOOKS, payload: response.data });
};

export const createBooks = (formValue) => async (dispatch) => {
  const response = await bookshelf.post("api/v1/books", formValue);

  dispatch({ type: CREATE_BOOK, payload: response.data });
};

export const fetchBook = (id) => async (dispatch) => {
  const response = await bookshelf.get(`api/v1/books/${id}`);

  dispatch({ type: FETCH_BOOK, payload: response.data });
};

export const editBook = (id, formValue) => async (dispatch) => {
  const response = await bookshelf.patch(`api/v1/books/${id}`, formValue);

  dispatch({ type: EDIT_BOOK, payload: response.data });
};

export const deleteBook = (id) => async (dispatch) => {
  await bookshelf.patch(`api/v1/books/${id}`);

  dispatch({ type: DELETE_BOOK, payload: id });
};

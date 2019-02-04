import BooksService from "../services/books";

export const createBook = book => (dispatch, getState) => {
  BooksService.createBook(book).then(book => {
    return dispatch({ type: "ADD_BOOK", payload: book });
  });
};

export const updateBook = book => (dispatch, getState) => {
  if (
    book.title.replace(/\s/g, "") === "" ||
    book.ISBN.replace(/\s/g, "") === ""
  ) {
    dispatch({
      type: "SET_MESSAGE",
      payload: {
        text:
          "Title and International Standard Book Number are required fields",
        className: "fail"
      }
    });
    setTimeout(() => {
      dispatch({ type: "SET_MESSAGE", payload: false });
    }, 5000);
    return false;
  }
  BooksService.updateBook(book).then(newBook => {
    dispatch({ type: "UPDATE_BOOK", payload: newBook });
  });
  return true;
};

export const deleteBook = book => (dispatch, getState) => {
  var del = window.confirm("Are you sure you want to delete this book?");
  if (del === true) {
    BooksService.deleteBook(book.id).then(response => {
      if (Object.keys(response).includes("success")) {
        dispatch({ type: "REMOVE_BOOK", payload: book });
        setTimeout(() => {
          dispatch({ type: "SET_MESSAGE", payload: false });
        }, 5000);
      }
    });
  }
};

export const getAllBooks = () => (dispatch, getState) => {
  let state = getState();
  if (state.books.length === 0) {
    BooksService.getBooks().then(res => {
      let { books } = res;
      dispatch({ type: "RECEIVE_BOOKS", payload: books });
    });
  }
};

import { createSelector } from "reselect";
import cloneDeep from "clone-deep";

const books = state => cloneDeep(state.books);
const message = state => cloneDeep(state.message);
const bookId = (state, props) => props.match.params.id;

export const booksSelector = createSelector(
  books,
  books => {
    return { books };
  }
);

export const bookSelector = createSelector(
  books,
  bookId,
  (books, id) => {
    return (
      books.find(book => {
        return book.id === parseInt(id);
      }) || {}
    );
  }
);

export const messageSelector = createSelector(
  message,
  message => {
    return Object.keys(message).length !== 0 ? { message } : {};
  }
);

const reducers = (state = { books: [], message: false }, action) => {
  let cloneState = { ...state };
  switch (action.type) {
    case "RECEIVE_BOOKS":
      cloneState.books = action.payload;
      return cloneState;
    case "ADD_BOOK":
      cloneState.books = [
        ...state.books,
        {
          id: action.payload.id,
          title: action.payload.title,
          ISBN: action.payload.ISBN,
          notes: action.payload.notes
        }
      ];
      return cloneState;
    case "UPDATE_BOOK":
      cloneState.books.forEach((book, i) => {
        if (book.id === action.payload.id) {
          cloneState.books[i] = action.payload;
        }
      });
      return cloneState;
    case "REMOVE_BOOK":
      cloneState.books = cloneState.books.filter(
        book => book.id !== action.payload.id
      );
      cloneState.message = {
        text: `${action.payload.title} successfully deleted`,
        className: "success"
      };
      return cloneState;
    case "SET_MESSAGE":
      cloneState.message = action.payload;
      return cloneState;
    default:
      return state;
  }
};

export default reducers;

import React, { createContext, useReducer, useContext } from "react";

const BooksContext = createContext();
const { Provider } = BooksContext;

const reducer = (state, action) => {
  switch (action.type) {
  case "handleSearchInput":
      return {...state, searchInput: action.searchInput}
  case "addBook":
    return { ...state, savedbooks: [...state.savedBooks, action.newBook] };
  default:
    throw new Error(`Invalid action type: ${action.type}`);
  }
};

const BooksProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, { savedBooks: value, searchInput: ""});

  return <Provider value={[state, dispatch]} {...props} />;
};

const useBooksContext = () => {
  return useContext(BooksContext);
};

export { BooksProvider, useBooksContext };
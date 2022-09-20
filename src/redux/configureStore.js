import { configureStore, Redux } from 'redux';
import books from './books/books';
import categories from './categories/categories';

const rootReducer = Redux.combineReducers({
  count: books,
  check: categories,
});

// eslint-disable-next-line no-unused-vars
const store = configureStore({ reducer: rootReducer });

import { configureStore, Redux } from '@reduxjs/toolkit';
import counterReducer from './books/books';
import checkCategoryReducer from './categories/categories';

const rootReducer = Redux.combineReducers({
  count: counterReducer,
  check: checkCategoryReducer,
});

// eslint-disable-next-line no-unused-vars
const store = configureStore({ reducer: rootReducer });

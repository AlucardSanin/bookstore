import { configureStore } from '@reduxjs/toolkit';
import books from './books/books';
import categories from './categories/categories';

const store = configureStore({
  reducer: {
    count: books,
    check: categories,
  },
});

export default store;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/WsLmIXPdjoycXsdgK4QM/books';

const defaultState = [];

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  const response = await axios.post(apiURL, book);
  if (response.status === 201) {
    return book;
  }
  return response.data;
});

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  const response = await axios.get(apiURL);
  return response.data;
});

export const removeBook = createAsyncThunk('books/removeBook', async (book) => {
  await axios.delete(`${apiURL}/${book.item_id}`);
  return book;
});

export const booksSlice = createSlice({
  name: 'books',
  initialState: defaultState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers to handle loading state as needed
    builder
      .addCase(addBook.fulfilled, (state, action) => {
        // Add book
        state.push(action.payload);
      })
      .addCase(getBooks.fulfilled, (state, action) => Object.entries(action.payload).map(
        ([id, [book]]) => ({ ...book, item_id: id }),
      ))
      .addCase(removeBook.fulfilled, (state, action) => {
        state.forEach((book) => {
          if (book.item_id === action.payload.item_id) {
            state.splice(state.indexOf(book), 1);
          }
        });
      });
  },
});

export default booksSlice.reducer;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/books/books';
import BookItem from './BookItem';
import Form from './Form';

function BooksContainer() {
  const books = useSelector((state) => state.count);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <>
      <div id="books-list">
        {books.map((book) => <BookItem key={book.item_id} book={book} />)}
      </div>
      <Form />
    </>
  );
}

export default BooksContainer;

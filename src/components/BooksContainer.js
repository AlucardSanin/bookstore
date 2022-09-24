import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';
import Form from './Form';

function BooksContainer() {
  const books = useSelector((state) => state.count);
  return (
    <>
      <div id="books-list">
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
      <Form />
    </>
  );
}

export default BooksContainer;

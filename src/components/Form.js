import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function Form() {
  const dispatch = useDispatch();
  const [Title, setTitle] = useState('');
  const [Author, setAuthor] = useState('');
  return (
    <div id="add-book">
      <h1>ADD NEW BOOK</h1>
      <form id="form-book">
        <input id="title" value={Title} onInput={(e) => setTitle(e.target.value)} placeholder="Book title" type="text" />
        <input id="author" value={Author} onInput={(e) => setAuthor(e.target.value)} placeholder="Author" type="text" />
        <button
          onClick={() => {
            dispatch(addBook({
              title: Title,
              author: Author,
              id: uuidv4(),
            }));
            setAuthor('');
            setTitle('');
          }}
          type="button"
        >
          ADD BOOK

        </button>
      </form>
    </div>
  );
}

export default Form;

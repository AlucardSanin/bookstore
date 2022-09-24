import { useDispatch } from 'react-redux';
import React from 'react';
import { checkCategory } from '../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(checkCategory())}
      type="button"
      id="check-status"
    >
      Check status
    </button>
  );
}

export default Categories;

const REMOVE = 'bookstore/books/REMOVE';
const CREATE = 'bookstore/books/CREATE';

const defaultState = [];

// define an action creator for adding books
export const addBook = (payload) => ({
  type: CREATE,
  payload,
});

// define an action creator for removing books
export const removeBook = (payload) => ({
  type: REMOVE,
  payload,
});

export default function books(state = defaultState, action) {
  switch (action.type) {
    case CREATE:
      return [...state, action.payload];

    case REMOVE:
      return [...state, action.payload];

    default:
      return state;
  }
}

const REMOVE = 'bookstore/books/REMOVE';
const CREATE = 'bookstore/books/CREATE';

const defaultState = [
  {
    id: 1,
    title: 'The Hunger Games',
    genre: 'Action',
    percentage: 64,
    author: 'Suzanne Collins',
    chapter: 17,
  },
  {
    id: 2,
    title: 'Dune',
    genre: 'Sci-Fi',
    percentage: 35,
    author: 'Frank Herbert',
    chapter: 3,
  },
  {
    id: 3,
    title: 'Capital in the Twenty-First Century',
    genre: 'Economy',
    percentage: 18,
    author: 'Suzanne Collins',
    chapter: 8,
  },
];

// define an action creator for adding books
export const addBook = (payload) => ({
  type: CREATE,
  payload,
});

// define an action creator for removing books
export const removeBook = (id) => ({
  type: REMOVE,
  id,
});

export default function books(state = defaultState, action) {
  const index = state.findIndex((object) => object.id === action.id);
  switch (action.type) {
    case CREATE:
      return [...state, action.payload];

    case REMOVE:
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1, state.length),
      ];

    default:
      return state;
  }
}

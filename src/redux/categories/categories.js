const CHECK = 'bookstore/categories/CHECK';

const defaultStateCat = [];

// define check category action
export const checkCategory = (payload) => ({
  type: CHECK,
  payload,
});

export default function Categories(state = defaultStateCat, action) {
  switch (action.type) {
    case CHECK:
      return 'Under Construction';

    default:
      return state;
  }
}

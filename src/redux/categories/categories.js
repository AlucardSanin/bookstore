const CHECK = 'bookstore/categories/CHECK';

const defaultStateCat = [];

// define check category action
export const checkCategory = (category) => ({
  type: CHECK,
  category,
});

export default function Categories(state = defaultStateCat, action) {
  switch (action.type) {
    case CHECK:
      return 'Under Construction';

    default:
      return state;
  }
}

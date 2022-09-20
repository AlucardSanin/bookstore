const CHECK = 'CHECK';

const defaultStateCat = [];

// define check category action
export const checkCategory = (payload) => ({
  type: CHECK,
  payload,
});

export default function checkCategoryReducer(state = defaultStateCat, action) {
  switch (action.type) {
    case CHECK:
      return 'Under Construction';

    default:
      return state;
  }
}

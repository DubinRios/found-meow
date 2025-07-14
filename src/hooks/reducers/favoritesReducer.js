export const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return state.includes(action.payload)
        ? state.filter(id => id !== action.payload)
        : [...state, action.payload];
    case 'LOAD':
      return action.payload || [];
    default:
      return state;
  }
};
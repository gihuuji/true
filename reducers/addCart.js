const initState = {
  allCart: [],
};
const addCart = (state = initState, action) => {
  switch (action.type) {
    case 'SET_CART':
      return {
        ...state,
        allCart: action.allCart,
      };
    default:
      return state;
  }
};

export default addCart;

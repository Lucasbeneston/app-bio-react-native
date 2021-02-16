export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.cartItems.find((item) => item.name === action.item.name)) {
        state.cartItems.push({
          ...action.item,
        });
      }
      return {
        ...state,
        cartItems: [...state.cartItems],
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: [
          ...state.cartItems.filter((item) => item.name !== action.item.name),
        ],
      };

    default:
      return state;
  }
};

const CartReducer = (state , action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const updatedCart = [...state.cart];
      const foundIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (foundIndex < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedItem = { ...updatedCart[foundIndex] };
        updatedItem.quantity++;
        updatedCart[foundIndex] = updatedItem;
      }
      return { ...state, cart: updatedCart };
    }
    case "DEC_FROM_CART": {
      const updatedCart = [...state.cart];
      const foundIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      const updatedItem = { ...updatedCart[foundIndex] };

      if (action.payload.quantity === 1) {
        const filteredCart = updatedCart.filter(
          (item) => item.id !== action.payload.id
        );
        return {
          ...state,
          cart: filteredCart,
        };
      } else {
        updatedItem.quantity--;
        updatedCart[foundIndex] = updatedItem;
        return { ...state, cart: updatedCart };
      }
    }
    default:return state
  }
};
export default CartReducer;

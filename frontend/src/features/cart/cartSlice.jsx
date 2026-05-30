import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const exist = state.cartItems.find(
        (x) => x._id === item._id
      );

      if (exist) {
        exist.qty += item.qty;
      } else {
        state.cartItems.push({
          ...item,
          qty: item.qty || 1,
        });
      }
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (x) => x._id !== action.payload
      );
    },

    decreaseQty: (state, action) => {
      const item = state.cartItems.find(
        (x) => x._id === action.payload
      );

      if (item) {
        item.qty -= 1;

        if (item.qty <= 0) {
          state.cartItems = state.cartItems.filter(
            (x) => x._id !== action.payload
          );
        }
      }
    },

    // ⭐ IMPORTANT FIX
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseQty,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
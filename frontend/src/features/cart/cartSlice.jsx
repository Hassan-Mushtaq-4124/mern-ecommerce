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

      const existItem = state.cartItems.find(
        (x) => x._id === item._id
      );

      if (existItem) {

        existItem.qty += 1;

      } else {

        state.cartItems.push({
          ...item,
          qty: 1,
        });
      }
    },

    increaseQty: (state, action) => {

      const item = state.cartItems.find(
        (x) => x._id === action.payload
      );

      if (item) {
        item.qty += 1;
      }
    },

    decreaseQty: (state, action) => {

      const item = state.cartItems.find(
        (x) => x._id === action.payload
      );

      if (item && item.qty > 1) {
        item.qty -= 1;
      }
    },

    removeFromCart: (state, action) => {

      state.cartItems = state.cartItems.filter(
        (x) => x._id !== action.payload
      );
    },

    clearCart: (state) => {

      state.cartItems = [];
    },
  },
});

export const {
  addToCart,
  increaseQty,
  decreaseQty,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
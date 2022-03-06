import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    showCart: false,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          totalPrice: newItem.price,
          name: newItem.name,
          quantity: 1,
        });
      }
      state.totalQuantity++;
    },
    removeFromCart(state, action) {
      const newId = action.payload;
      const existingItem = state.itemsList.find((item) => item.id === newId);
      if (existingItem.quantity === 1) {
        state.itemsList = state.itemsList.filter((item) => item.id !== newId);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
      state.totalQuantity--;
    },
    showCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;

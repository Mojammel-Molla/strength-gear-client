/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';

// Define the initial state using that type
const initialState = {
  products: [] as unknown,
  selectedItems: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isExist = state.products.find(
        product => product.id === action.payload.id
      );
      if (!isExist) {
      }
      state.selectedItems = selectSelectedItems(state);
      state.totalPrice = selectTotalPrice(state);
    },
    // updateQuantity: (state: any, action) => {
    //   const products = state.products.map((product: any) => {
    //     if (product.id === action.payload.id) {
    //       if (action.payload.type === 'increment') {
    //         product.quantity += 1;
    //       } else if (action.payload.type === 'decrement') {
    //         product.quantity -= 1;
    //       }
    //     }
    //     return product;
    //   });
    //   state.selectedItems = selectSelectedItems(state);
    //   state.totalPrice = selectTotalPrice(state);

    // },
    clearCart: state => {
      state.products = [];
      state.selectedItems = 0;
      state.totalPrice = 0;
    },
  },
});

export const selectSelectedItems = (state: unknown) =>
  state.products.reduce((total: number, product: unknown) => {
    return Number(total + product.quantity);
  }, 0);

export const selectTotalPrice = (state: unknown) =>
  state.products.reduce((total: number, product: any) => {
    return Number(total + product.quantity * product.price);
  }, 0);

export const selectTax = (state: any) =>
  selectTotalPrice(state) * state.taxRate;

export const { addToCart, updateQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';

// Define types for the products and cart state
type TProduct = {
  name: string;
  price: string;
  imageUrl: string;
  category: string;
  description: string;
  inStock?: boolean;
  quantity?: number;
};

interface CartState {
  products: TProduct[];
  selectedItems: number;
  totalPrice: number;
}

// Initial state with type definitions
const initialState: CartState = {
  products: [],
  selectedItems: 0,
  totalPrice: 0,
};

// Define selector functions to calculate selected items and total price
export const selectSelectedItems = (state: CartState) => {
  return state.products.reduce(
    (count, product) => count + (product.quantity || 0),
    0
  );
};

export const selectTotalPrice = (state: CartState) => {
  return state.products.reduce(
    (total, product) => total + product?.price * (product.quantity || 1),
    0
  );
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
        state.products.push({ ...action.payload, quantity: 1 });
      }
      state.selectedItems = selectSelectedItems(state);
      state.totalPrice = selectTotalPrice(state);
    },
    updateQuantity: (state: any, action) => {
      const products = state.products.map((product: any) => {
        if (product.id === action.payload.id) {
          if (action.payload.type === 'increment') {
            product.quantity += 1;
          } else if (action.payload.type === 'decrement') {
            product.quantity -= 1;
          }
        }
        return product;
      });
      state.selectedItems = selectSelectedItems(state);
      state.totalPrice = selectTotalPrice(state);
    },
    clearCart: state => {
      state.products = [];
      state.selectedItems = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, updateQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

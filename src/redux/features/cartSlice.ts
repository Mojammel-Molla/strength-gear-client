/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
const selectSelectedItems = (state: CartState) => {
  return state.products.reduce(
    (count, product) => count + (product.quantity || 0),
    0
  );
};

const selectTotalPrice = (state: CartState) => {
  return state.products.reduce(
    (total, product) => total + product.price * (product.quantity || 1),
    0
  );
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TProduct>) => {
      const existingProduct = state.products.find(
        product => product.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity || 1) + 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      // Update the selected items and total price
      state.selectedItems = selectSelectedItems(state);
      state.totalPrice = selectTotalPrice(state);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;

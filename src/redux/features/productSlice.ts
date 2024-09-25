/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TProduct } from '../../types';

// Define the initial state using that type
const initialState: TProduct[] = [];

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<TProduct>) => {
      console.log(state, action);
    },
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TProduct, TCartItem } from '../../types';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
  endpoints: builder => ({
    getProductById: builder.query<TProduct, string>({
      query: (id: string) => `/products/${id}`,
    }),

    getAllProducts: builder.query<TProduct[], void>({
      query: () => ({
        url: '/products',
        method: 'GET',
      }),
    }),

    // Add a product to the cart
    addToCart: builder.mutation<
      TCartItem,
      { productId: string; quantity: number }
    >({
      query: ({ productId, quantity }) => ({
        url: '/cart',
        method: 'POST',
        body: { productId, quantity },
      }),
    }),

    // Delete a product from the cart
    deleteFromCart: builder.mutation<{ success: boolean }, string>({
      query: (productId: string) => ({
        url: `/cart/${productId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useAddToCartMutation,
  useDeleteFromCartMutation,
} = baseApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TProduct, TCartItem } from '../../types';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
  tagTypes: ['product', 'cart'],
  endpoints: builder => ({
    addProduct: builder.mutation({
      query: product => ({
        url: '/products/create',
        method: 'POST',
        body: product,
      }),
      invalidatesTags: ['product'],
    }),

    getAllProducts: builder.query<TProduct[], void>({
      query: () => ({
        url: '/products',
        method: 'GET',
      }),
    }),

    getProductById: builder.query<TProduct, string>({
      query: (id: string) => `/products/${id}`,
    }),

    // Add a product to the cart
    addToCart: builder.mutation({
      query: data => ({
        url: '/cart',
        method: 'POST',
        body: { data },
      }),
      invalidatesTags: ['cart'],
    }),

    // Delete a product from the cart
    deleteFromCart: builder.mutation({
      query: (productId: string) => ({
        url: `/cart/${productId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['cart'],
    }),
    getAllCart: builder.query({
      query: () => ({
        url: '/cart',
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useAddToCartMutation,
  useDeleteFromCartMutation,
  useGetAllCartQuery,
  useAddProductMutation,
} = baseApi;

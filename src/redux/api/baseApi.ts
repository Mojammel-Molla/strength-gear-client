import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TProduct } from '../../types';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
  tagTypes: ['product', 'cart', 'order'],
  endpoints: builder => ({
    //add new product
    addProduct: builder.mutation({
      query: product => ({
        url: '/products/create',
        method: 'POST',
        body: product,
      }),
      invalidatesTags: ['product'],
    }),
    //get all product
    getAllProducts: builder.query<TProduct[], void>({
      query: () => ({
        url: '/products',
        method: 'GET',
      }),
      providesTags: ['product'],
    }),
    //get single product by id
    getProductById: builder.query<TProduct, string>({
      query: (id: string) => `/products/${id}`,
    }),
    //delete product by id
    deleteProduct: builder.mutation({
      query: (productId: string) => ({
        url: `/products/${productId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['product'],
    }),

    // Add a product to the cart
    addToCart: builder.mutation({
      query: product => ({
        url: '/cart',
        method: 'POST',
        body: product,
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
    //get all product from the cart
    getAllCart: builder.query({
      query: () => ({
        url: '/cart',
        method: 'GET',
      }),
      providesTags: ['cart'],
    }),
    //create new order
    addOrder: builder.mutation({
      query: order => ({
        url: '/order',
        method: 'POST',
        body: order,
      }),
      invalidatesTags: ['order'],
    }),
    //get all product from the cart
    getAllOrders: builder.query({
      query: () => ({
        url: '/orders',
        method: 'GET',
      }),
      providesTags: ['order'],
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
  useDeleteProductMutation,
  useAddOrderMutation,
  useGetAllOrdersQuery,
} = baseApi;

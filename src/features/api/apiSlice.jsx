import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
   reducerPath: "productsApi",
   baseQuery: fetchBaseQuery({ baseUrl: "https://ace-store-api.onrender.com/"}),
   endpoints: builder => ({
      getProducts: builder.query({
         query: () => "products"
      }),
      getSingleProduct: builder.query({
         query: productId => `products/${productId}`
      })
   }),
});

export const { useGetProductsQuery, useGetSingleProductQuery } = productsApi;

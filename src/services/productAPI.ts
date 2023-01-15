import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PageEndpointResponse, ProductEndpointResponse } from "../types";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://reqres.in/api/products",
  }),
  endpoints: (builder) => ({
    getProductPage: builder.query<PageEndpointResponse, number>({
      query: (pageNumber) => `?per_page=5&page=${pageNumber}`,
    }),
    getSingleProduct: builder.query<ProductEndpointResponse, number>({
      query: (productId) => `?id=${productId}`,
    }),
  }),
});

export const { useGetProductPageQuery, useGetSingleProductQuery } = productApi;

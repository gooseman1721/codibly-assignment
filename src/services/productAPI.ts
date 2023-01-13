import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { EndpointResponse } from "../types";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://reqres.in/api/products?per_page=5",
  }),
  endpoints: (builder) => ({
    getProductPage: builder.query<EndpointResponse, number>({
      query: (pageNumber) => `&page=${pageNumber}`,
    }),
  }),
});

export const { useGetProductPageQuery } = productApi;

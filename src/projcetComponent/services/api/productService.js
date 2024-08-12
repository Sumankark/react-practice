import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../config/config";

export const productApi = createApi({
  // reducerPath must be unique
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  tagTypes: ["readProduct","readProductById"],
  // get-> query and  other -> mutation
  endpoints: (builder) => ({
    readProduct: builder.query({
      query: () => {
        return {
          url: "/products",
          method: "GET",
        };
      },
      providesTags: ["readProduct"]
    }),
    readProductById: builder.query({
      query: (id) => {
        return {
          url: `/products/${id}`,
          method: "GET",
        };
      },
      providesTags: ["readProductById"]
    }),
    deleteProduct: builder.mutation({
      query: (id) => {
        return {
          url: `/products/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["readProduct"]
    }),
    // invalidate detail page while update.
    updatedProduct: builder.mutation({
      query: (info) => {
        return {
          url: `/products/${info.id}`,
          method: "PATCH",
          body: info.body,
        };
      },
      invalidatesTags: ["readProduct","readProductById"]
    }),
  }),
});

export const {
  useReadProductQuery,
  useReadProductByIdQuery,
  useDeleteProductMutation,
  useCreateProductMutation,
  useUpdatedProductMutation,
} = productApi;

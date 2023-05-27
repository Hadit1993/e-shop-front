import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../infrastructure/axiosConfig";

export const authApi = createApi({
  reducerPath: "registerApi",
  baseQuery: axiosBaseQuery(),

  endpoints: (builder) => ({
    register: builder.mutation<any, FormData>({
      query: (formData) => ({
        url: "/register",
        method: "POST",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      }),
    }),

    activateAccount: builder.query<any, string>({
      query: (tokenId) => ({ url: `/activate/${tokenId}`, method: "GET" }),
    }),
  }),
});

export const { useRegisterMutation, useActivateAccountQuery } = authApi;

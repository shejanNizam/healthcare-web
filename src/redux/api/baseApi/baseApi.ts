import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: "include",
    prepareHeaders: (headers) => {
      // const token = localStorage.getItem("user_token");
      // headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["auth", "user", "jobs", "value", "settings"],
  endpoints: () => ({}),
});

export default baseApi;

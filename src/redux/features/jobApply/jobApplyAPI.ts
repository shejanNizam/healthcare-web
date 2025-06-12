import baseApi from "@/redux/api/baseApi/baseApi";

export const jobsApplyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get value
    applyInfo: builder.mutation({
      query: (body) => ({
        url: `/apply/personal-info`,
        method: "POST",
        body,
      }),
    }),
    eduInfo: builder.mutation({
      query: (body) => ({
        url: `/apply/create/${body.id}`,
        method: "POST",
        body: body.data,
      }),
    }),
    finalApply: builder.mutation({
      query: (body) => ({
        url: `/apply/education-info/${body.id}`,
        method: "PUT",
        body: body.data,
      }),
    }),
  }),
});

export const {
  useApplyInfoMutation,
  useEduInfoMutation,
  useFinalApplyMutation,
} = jobsApplyApi;

import baseApi from "@/redux/api/baseApi/baseApi";

export const jobsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // all beautician
    getJobs: builder.query({
      query: ({ page = 1, limit = 10 }) => ({
        url: `/`,
        method: "GET",
        params: {
          page,
          limit,
        },
      }),
      providesTags: ["jobs"],
    }),
    // get beautician by id
    getJobDetails: builder.query({
      query: (id) => ({
        url: `//${id}`,
        method: "GET",
      }),
      providesTags: ["jobs"],
    }),

    // post jobs
    postJob: builder.mutation({
      query: (jobData) => ({
        url: "/job/create",
        method: "POST",
        body: jobData,
      }),
      invalidatesTags: ["jobs"],
    }),
  }),
});

export const {} = jobsApi;

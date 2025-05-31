import baseApi from "@/redux/api/baseApi/baseApi";

export const blogs = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        Allblogs: builder.query({
            query: () => ({
                url: `/blog/all/`,
                method: "GET",
            }),
        }),
        singleBlogs: builder.query({
            query: (id) => ({
                url: `/blog/single/${id}`,
                method: "GET",
            }),
        }),
        AllCategoryblogs: builder.query({
            query: () => ({
                url: `/blog/category/blogs`,
                method: "GET",
            }),
        }),
        // post jobs

    }),
});

export const { useAllblogsQuery, useAllCategoryblogsQuery, useSingleBlogsQuery } = blogs;

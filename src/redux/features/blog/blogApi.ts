/* eslint-disable @typescript-eslint/no-explicit-any */
import baseApi from "@/redux/api/baseApi/baseApi";

export const blogs = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        Allblogs: builder.query({
            query: (value) => {
                console.log(value);

                return {
                    url: value ? `/blog/all/?category=${value}` : `/blog/all/`,
                    method: "GET",
                }
            },
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

/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import BlogCard from "@/components/BlogCard";
import CustomErrorPage from "@/components/CustomErrorPage";
import { Pagination } from "antd";
import { useState } from "react";
import { useAllblogsQuery } from "../../redux/features/blog/blogApi";

export default function BlogsPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const { data } = useAllblogsQuery({ page: currentPage });
  const pagination = data?.data?.pagination || {
    totalPage: 1,
    currentPage: 1,
    prevPage: 1,
    nextPage: 1,
    totalData: 0,
  };

  return (
    <>
      <div className=" container mx-auto p-4 sm:p-6 md:p-8 min-h-screen flex">
        {/* Main Content */}
        <main className="flex-1 ml-0 md:ml-4 relative">
          <h3 className="text-2xl text-primary font-bold mb-4">
            Most Recent Blogs
          </h3>

          <div className="mt-10 md:mt-0 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
            {data?.data?.allBlogs.length === 0 ? (
              <div className="flex justify-center items-center col-span-full min-h-[300px]">
                <CustomErrorPage text={`No blogs yet!!`} />
              </div>
            ) : (
              data?.data?.allBlogs.map((blog: any) => (
                <BlogCard key={blog._id} blog={blog} />
              ))
            )}
          </div>
        </main>
      </div>
      <div className="mt-8 flex justify-center">
        <Pagination
          current={pagination.currentPage}
          total={pagination.totalData}
          pageSize={10}
          onChange={(page) => {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          showSizeChanger={false}
          showQuickJumper
          className="mt-6"
        />
      </div>
    </>
  );
}

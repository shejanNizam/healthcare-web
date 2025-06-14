/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import BlogCard from "@/components/BlogCard";
import CustomErrorPage from "@/components/CustomErrorPage";
import { useAllblogsQuery } from "../../redux/features/blog/blogApi";

export default function BlogsPage() {
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  // const [categoryValue, setCatagoryValue] = useState<string>();
  // const onCategoryClick = (categoryType: string) => {
  //   setCatagoryValue(categoryType);

  //   if (sidebarOpen) setSidebarOpen(false);
  // };
  // const { data: categoryData } = useAllCategoryblogsQuery(undefined);
  // const { data } = useAllblogsQuery(categoryValue);
  const { data } = useAllblogsQuery({});

  return (
    <div className=" container mx-auto p-4 sm:p-6 md:p-8 min-h-screen flex">
      {/* Sidebar */}
      {/* <div
        className={`
          fixed top-18 md:top-0 left-0 h-full bg-secondary rounded-r-lg p-6
          w-auto z-40
          transform transition-transform duration-300 ease-in-out
          md:relative md:translate-x-0
          ${
            sidebarOpen
              ? "translate-x-0 shadow-xl"
              : "-translate-x-full md:translate-x-0"
          }
        `}
      >
        <h2 className="text-2xl text-primary font-bold mb-4 mt-4 md:mt-0">
          Category
        </h2>
        <List
          dataSource={categoryData?.data}
          renderItem={(cat: any) => (
            <List.Item
              key={cat?._id}
              className={`cursor-pointer rounded-md px-3 py-1 ${
                categoryValue === cat.categoryType
                  ? "bg-primary/50 text-white font-semibold"
                  : "hover:bg-primary/40"
              }`}
              onClick={() => onCategoryClick(cat.categoryType)}
            >
              <div className="flex justify-between items-center gap-16 w-full px-2">
                <span>{cat.categoryType}</span>
                <div className="rounded-full bg-primary/80 w-8 h-8 shadow-2xl flex items-center justify-center text-white font-semibold">
                  {cat?.length}
                </div>
              </div>
            </List.Item>
          )}
        />
      </div> */}

      {/* Overlay */}
      {/* {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )} */}

      {/* Main Content */}
      <main className="flex-1 ml-0 md:ml-4 relative">
        <h3 className="text-2xl text-primary font-bold mb-4">Most Recent</h3>
        {/* Hamburger Button */}
        {/* <button
          className="md:hidden absolute top-4 right-4 z-10 p-2 rounded-md bg-primary text-white shadow-lg"
          onClick={() => setSidebarOpen((open) => !open)}
          aria-label="Toggle categories sidebar"
        >
          <HiMenu size={24} />
        </button> */}

        {/* Main Content Grid */}

        <div className="mt-10 md:mt-0 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
          {data?.data?.allBlogs.length === 0 ? (
            <div className="flex justify-center items-center col-span-full min-h-[300px]">
              <CustomErrorPage />
            </div>
          ) : (
            data?.data?.allBlogs.map((blog: any) => (
              <BlogCard key={blog._id} blog={blog} />
            ))
          )}
        </div>
      </main>
    </div>
  );
}

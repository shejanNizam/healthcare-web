// "use client";

// import { List } from "antd";

// import { useState } from "react";
// import image from "../../assets/banner/banner_right_side.png";

// interface Category {
//   id: string;
//   name: string;
//   count: number;
// }

// import BlogCard from "@/components/BlogCard";
// import type { StaticImageData } from "next/image";

// interface Blog {
//   id: string;
//   title: string;
//   summary: string;
//   image: string | StaticImageData;
// }

// const categories: Category[] = [
//   { id: "1", name: "Nursing", count: 34 },
//   { id: "2", name: "Allied", count: 8 },
//   { id: "3", name: "Physician", count: 12 },
//   { id: "4", name: "Neuroscience", count: 9 },
//   { id: "5", name: "Dentistry", count: 41 },
//   { id: "6", name: "Leadership", count: 20 },
//   { id: "7", name: "Schools", count: 54 },
//   { id: "8", name: "Language Interpreter", count: 6 },
//   { id: "9", name: "Browse by City", count: 18 },
// ];

// const blogs: Record<number, Blog[]> = {
//   1: [
//     {
//       id: "1",
//       title:
//         "Prioritize your privacy and are committed to protecting your personal information",
//       summary:
//         "We prioritize your privacy and are committed to protecting your personal information...",
//       image: image,
//     },
//     {
//       id: "2",
//       title: "Another blog on Housing",
//       summary: "A quick summary for another blog in the Housing category...",
//       image: image,
//     },
//   ],
//   2: [
//     {
//       id: "3",
//       title: "Allied healthcare blog",
//       summary: "Summary of allied healthcare blog...",
//       image: image,
//     },
//   ],
// };

// export default function BlogsPage() {
//   const [selectedCategory, setSelectedCategory] = useState<number>(
//     parseInt(categories[0].id, 10)
//   );

//   return (
//     <div className="max-w-7xl mx-auto p-6 flex gap-6 min-h-screen">
//       {/* Categories Sidebar */}
//       <div className="w-72 bg-secondary rounded-lg p-8 sticky top-6 h-fit">
//         <h2 className="text-xl text-primary font-bold mb-4">Category</h2>
//         <List
//           dataSource={categories}
//           renderItem={(cat) => (
//             <List.Item
//               key={cat.id}
//               className={`cursor-pointer rounded-md px-3 py-1 ${
//                 selectedCategory === parseInt(cat.id, 10)
//                   ? "bg-primary/50 text-white font-semibold"
//                   : "hover:bg-primary/40"
//               }`}
//               onClick={() => setSelectedCategory(parseInt(cat.id, 10))}
//             >
//               <div className="flex justify-between items-center w-full px-2">
//                 <span>{cat.name}</span>
//                 {/* <Badge
//                   count={cat.count}
//                   className="bg-blue-200 text-primary px-2 rounded text-xs font-medium"
//                 /> */}
//                 <div className=" rounded-full bg-primary/80 w-8 h-8 shadow-2xl flex items-center justify-center text-white font-semibold">
//                   {cat.count}
//                 </div>
//               </div>
//             </List.Item>
//           )}
//         />
//       </div>

//       {/* Blog Cards */}
//       <div className="flex-1 space-y-6">
//         {(blogs[selectedCategory] || []).length === 0 && (
//           <p className="text-gray-500">No blogs available in this category.</p>
//         )}

//         {(blogs[selectedCategory] || []).map((blog) => (
//           <BlogCard key={blog.id} blog={blog} />
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";

import BlogCard from "@/components/BlogCard";
import CustomErrorPage from "@/components/CustomErrorPage";
import { List } from "antd";
import type { StaticImageData } from "next/image";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import image from "../../assets/banner/banner_right_side.png";

interface Category {
  id: string;
  name: string;
  count: number;
}

interface Blog {
  id: string;
  title: string;
  summary: string;
  image: string | StaticImageData;
}

const categories: Category[] = [
  { id: "1", name: "Nursing", count: 34 },
  { id: "2", name: "Allied", count: 8 },
  { id: "3", name: "Physician", count: 12 },
  { id: "4", name: "Neuroscience", count: 9 },
  { id: "5", name: "Dentistry", count: 41 },
  { id: "6", name: "Leadership", count: 20 },
  { id: "7", name: "Schools", count: 54 },
  { id: "8", name: "Language Interpreter", count: 6 },
  { id: "9", name: "Browse by City", count: 18 },
];

const blogs: Record<number, Blog[]> = {
  1: [
    {
      id: "1",
      title:
        "Prioritize your privacy and are committed to protecting your personal information",
      summary:
        "We prioritize your privacy and are committed to protecting your personal information...",
      image: image,
    },
    {
      id: "2",
      title: "Another blog on Housing",
      summary: "A quick summary for another blog in the Housing category...",
      image: image,
    },
    {
      id: "10",
      title: "Innovations in Nursing Care",
      summary:
        "Exploring recent advances and technologies shaping nursing practices.",
      image: image,
    },
    {
      id: "11",
      title: "Nursing Career Growth Strategies",
      summary:
        "Tips and advice for nurses looking to advance their careers effectively.",
      image: image,
    },
    {
      id: "12",
      title: "Balancing Work and Life in Nursing",
      summary:
        "How nurses can maintain a healthy work-life balance amidst busy schedules.",
      image: image,
    },
  ],
  2: [
    {
      id: "3",
      title: "Allied healthcare blog",
      summary: "Summary of allied healthcare blog...",
      image: image,
    },
    {
      id: "13",
      title: "The Role of Allied Health Professionals",
      summary:
        "Understanding the vital contributions of allied health in patient care.",
      image: image,
    },
    {
      id: "14",
      title: "Career Paths in Allied Health",
      summary:
        "An overview of diverse career opportunities in allied health sectors.",
      image: image,
    },
  ],
  3: [
    {
      id: "15",
      title: "Physician’s Guide to Patient Communication",
      summary:
        "Effective communication techniques for physicians to improve care.",
      image: image,
    },
    {
      id: "16",
      title: "Advancements in Physician Training",
      summary:
        "Latest methods and tools for enhancing physician education and skills.",
      image: image,
    },
  ],
};

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState<number>(
    parseInt(categories[0].id, 10)
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const onCategoryClick = (id: number) => {
    setSelectedCategory(id);
    if (sidebarOpen) setSidebarOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8 min-h-screen flex">
      {/* Sidebar */}
      <div
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
        <h2 className="text-2xl text-primary font-bold mb-4">Category</h2>
        <List
          dataSource={categories}
          renderItem={(cat) => (
            <List.Item
              key={cat.id}
              className={`cursor-pointer rounded-md px-3 py-1 ${
                selectedCategory === parseInt(cat.id, 10)
                  ? "bg-primary/50 text-white font-semibold"
                  : "hover:bg-primary/40"
              }`}
              onClick={() => onCategoryClick(parseInt(cat.id, 10))}
            >
              <div className="flex justify-between items-center gap-16 w-full px-2">
                <span>{cat.name}</span>
                <div className="rounded-full bg-primary/80 w-8 h-8 shadow-2xl flex items-center justify-center text-white font-semibold">
                  {cat.count}
                </div>
              </div>
            </List.Item>
          )}
        />
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Main Content */}
      <main className="flex-1 ml-0 md:ml-4 relative">
        <h3 className="text-2xl text-primary font-bold mb-4">Most Recent</h3>
        {/* Hamburger Button */}
        <button
          className="md:hidden absolute top-4 right-4 z-10 p-2 rounded-md bg-primary text-white shadow-lg"
          onClick={() => setSidebarOpen((open) => !open)}
          aria-label="Toggle categories sidebar"
        >
          <HiMenu size={24} />
        </button>

        {/* Main Content Grid */}

        <div className="mt-10 md:mt-0 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
          {(blogs[selectedCategory] || []).length === 0 ? (
            <CustomErrorPage />
          ) : (
            (blogs[selectedCategory] || []).map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))
          )}
        </div>
      </main>
    </div>
  );
}

"use client";

import { Badge, Button, List } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import image from "../../assets/banner/banner_right_side.png";

interface Category {
  id: number;
  name: string;
  count: number;
}

import type { StaticImageData } from "next/image";

interface Blog {
  id: number;
  title: string;
  summary: string;
  image: string | StaticImageData;
}

const categories: Category[] = [
  { id: 1, name: "Housing", count: 34 },
  { id: 2, name: "Allied", count: 8 },
  { id: 3, name: "Physician", count: 12 },
  { id: 4, name: "Neuroscience", count: 9 },
  { id: 5, name: "Dentistry", count: 41 },
  { id: 6, name: "Leadership", count: 20 },
  { id: 7, name: "Schools", count: 54 },
  { id: 8, name: "Language Interpreter", count: 6 },
  { id: 9, name: "Browse by City", count: 18 },
];

const blogs: Record<number, Blog[]> = {
  1: [
    {
      id: 1,
      title:
        "Prioritize your privacy and are committed to protecting your personal information",
      summary:
        "We prioritize your privacy and are committed to protecting your personal information...",
      image: image,
    },
    {
      id: 2,
      title: "Another blog on Housing",
      summary: "A quick summary for another blog in the Housing category...",
      image: image,
    },
  ],
  2: [
    {
      id: 3,
      title: "Allied healthcare blog",
      summary: "Summary of allied healthcare blog...",
      image: image,
    },
  ],
  // Add other categories as needed
};

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState<number>(
    categories[0].id
  );
  const router = useRouter();

  return (
    <div className="max-w-7xl mx-auto p-6 flex gap-6 min-h-screen">
      {/* Categories Sidebar */}
      <div className="w-52 bg-gray-50 rounded-lg p-4 sticky top-6 h-fit">
        <h2 className="text-xl font-semibold mb-4">Category</h2>
        <List
          dataSource={categories}
          renderItem={(cat) => (
            <List.Item
              key={cat.id}
              className={`cursor-pointer rounded-md px-3 py-2 ${
                selectedCategory === cat.id
                  ? "bg-blue-600 text-white font-semibold"
                  : "hover:bg-blue-100"
              }`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              <div className="flex justify-between w-full">
                <span>{cat.name}</span>
                <Badge
                  count={cat.count}
                  className="bg-blue-200 text-blue-700 px-2 rounded text-xs font-medium"
                />
              </div>
            </List.Item>
          )}
        />
      </div>

      {/* Blog Cards */}
      <div className="flex-1 space-y-6">
        {(blogs[selectedCategory] || []).length === 0 && (
          <p className="text-gray-500">No blogs available in this category.</p>
        )}

        {(blogs[selectedCategory] || []).map((blog) => (
          <div
            key={blog.id}
            onClick={() => router.push(`/blogs/${blog.id}`)}
            className="flex cursor-pointer border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative w-48 h-32">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                style={{ objectFit: "cover" }}
                sizes="192px"
                priority={false}
              />
            </div>
            <div className="p-4 flex flex-col justify-between">
              <h3 className="text-blue-800 font-semibold mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-700">{blog.summary}</p>
              <Button type="primary" className="mt-4 w-max">
                Read more
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { Button, Spin } from "antd";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import { useSingleBlogsQuery } from "../../../redux/features/blog/blogApi";

type Params = {
  id: string;
};

const imageBaseURL = process.env.NEXT_PUBLIC_IMAGE_URL;
export default function BlogDetails({ params }: { params: Promise<Params> }) {
  const { id } = use(params);
  const { data, isLoading } = useSingleBlogsQuery(id);
  const singleBlog = data?.data;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/blogs">
          <Button type="link" className="mb-4 flex items-center bg-secondary">
            <span className="text-primary text-2xl font-semibold">
              ← Details of Blogs
            </span>
          </Button>
        </Link>

        <article className="bg-white rounded-lg shadow overflow-hidden">
          <div className="relative w-full h-60">
            <Image
              src={imageBaseURL + singleBlog?.banner}
              alt={singleBlog?.description}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <div className="p-6 sm:p-8">
            <div className="flex justify-between items-start mb-4">
              <span className="inline-block bg-blue-100 text-primary text-xs px-2 py-1 rounded">
                {singleBlog?.category}
              </span>
              <span className="text-sm text-primary font-semibold">
                {new Date(singleBlog?.createdAt).toLocaleDateString()}
              </span>
            </div>

            <h1 className="text-3xl font-bold text-primary mb-6">
              {singleBlog?.title}
            </h1>

            <div
              className="prose max-w-none mb-2"
              dangerouslySetInnerHTML={{ __html: singleBlog?.description }}
            />
          </div>
        </article>
      </div>
    </div>
  );
}

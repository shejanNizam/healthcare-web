"use client"

import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useSingleBlogsQuery } from "../../../redux/features/blog/blogApi";

// Dummy data - in a real app, you'd fetch this based on the ID
// const blogDetails = {
//   id: 1,
//   title: "The Future of AI in 2023",
//   content: `
//     <p>Artificial Intelligence continues to revolutionize various sectors, from healthcare to finance. In 2023, we're seeing several key trends emerge:</p>

//     <h2>1. AI in Healthcare</h2>
//     <p>AI-powered diagnostics are becoming more accurate than human doctors in certain specialties. New algorithms can predict health issues before symptoms appear.</p>

//     <h2>2. Natural Language Processing</h2>
//     <p>The latest NLP models can understand context and nuance better than ever, enabling more natural human-computer interactions.</p>

//     <h2>3. Ethical AI</h2>
//     <p>With great power comes great responsibility. The focus on ethical AI development has never been higher, with new frameworks emerging.</p>
//   `,
//   category: "Technology",
//   date: "May 15, 2023",
//   image: image,
//   author: {
//     name: "Jane Doe",
//     avatar: image,
//     bio: "AI researcher with 10 years of experience in machine learning.",
//   },
// };
const imageBaseURL = process.env.NEXT_PUBLIC_IMAGE_URL
export default function BlogDetails({ params }: { params: { id: string } }) {
  const { id } = params
  const { data } = useSingleBlogsQuery(id)
  const singleBlog = data?.data

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
              priority={false}
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

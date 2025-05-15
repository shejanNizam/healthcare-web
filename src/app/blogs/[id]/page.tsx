import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import image from "../../../assets/banner/banner_right_side.png";

// Dummy data - in a real app, you'd fetch this based on the ID
const blogDetails = {
  id: 1,
  title: "The Future of AI in 2023",
  content: `
    <p>Artificial Intelligence continues to revolutionize various sectors, from healthcare to finance. In 2023, we're seeing several key trends emerge:</p>
    
    <h2>1. AI in Healthcare</h2>
    <p>AI-powered diagnostics are becoming more accurate than human doctors in certain specialties. New algorithms can predict health issues before symptoms appear.</p>
    
    <h2>2. Natural Language Processing</h2>
    <p>The latest NLP models can understand context and nuance better than ever, enabling more natural human-computer interactions.</p>
    
    <h2>3. Ethical AI</h2>
    <p>With great power comes great responsibility. The focus on ethical AI development has never been higher, with new frameworks emerging.</p>
  `,
  category: "Technology",
  date: "May 15, 2023",
  image: image,
  author: {
    name: "Jane Doe",
    avatar: image,
    bio: "AI researcher with 10 years of experience in machine learning.",
  },
};

export default function BlogDetails() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/blogs">
          <Button type="text" className="mb-4 flex items-center">
            ← Back to Blogs
          </Button>
        </Link>

        <article className="bg-white rounded-lg shadow overflow-hidden">
          <div className="relative w-full h-40">
            <Image
              src={blogDetails.image}
              alt={blogDetails.title}
              fill
              style={{ objectFit: "cover" }}
              sizes="192px"
              priority={false}
            />
          </div>

          <div className="p-6 sm:p-8">
            <div className="flex justify-between items-start mb-4">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                {blogDetails.category}
              </span>
              <span className="text-sm text-gray-500">{blogDetails.date}</span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              {blogDetails.title}
            </h1>

            <div
              className="prose max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: blogDetails.content }}
            />

            <div className="border-t pt-6 mt-6">
              <div className="flex items-center">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={blogDetails.image}
                    alt={blogDetails.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="192px"
                    priority={false}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {blogDetails.author.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {blogDetails.author.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

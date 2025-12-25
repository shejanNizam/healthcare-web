import { BASE_URL } from "@/redux/api/baseApi/baseApi";
import { Button } from "antd";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Params = {
  id: string;
};

const imageBaseURL = process.env.NEXT_PUBLIC_IMAGE_URL;

interface Blog {
  _id: string;
  blogTitle: string;
  description: string;
  banner: string;
  category: string;
  createdAt: string;
  pageTitle: string;
  meteDescription: string;
  url: string;
}

async function getBlogData(id: string): Promise<Blog | null> {
  try {
    const response = await fetch(`${BASE_URL}/blog/single/${id}`, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch blog: ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const singleBlog = await getBlogData(id);
  // console.log(singleBlog);

  if (!singleBlog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: singleBlog.pageTitle || singleBlog.blogTitle,
    description: singleBlog.meteDescription || singleBlog.description,
    openGraph: {
      title: singleBlog.pageTitle || singleBlog.blogTitle,
      description: singleBlog.meteDescription || singleBlog.description,
      images: [imageBaseURL + singleBlog.banner],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: singleBlog.pageTitle || singleBlog.blogTitle,
      description: singleBlog.meteDescription || singleBlog.description,
      images: [imageBaseURL + singleBlog.banner],
    },
  };
}

export default async function BlogDetails({
  params,
}: {
  params: Promise<Params>;
}) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const singleBlog = await getBlogData(id);
  console.log(singleBlog);

  if (!singleBlog) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Blog Not Found
          </h1>
          <Link href="/blogs">
            <Button type="primary">Back to Blogs</Button>
          </Link>
        </div>
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
              src={imageBaseURL + singleBlog.banner}
              alt={singleBlog.description}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <div className="p-6 sm:p-8">
            <div className="flex justify-between items-start mb-4">
              <span className="inline-block bg-blue-100 text-primary text-xs px-2 py-1 rounded">
                {singleBlog.category}
              </span>
              <span className="text-sm text-primary font-semibold">
                {new Date(singleBlog.createdAt).toLocaleDateString()}
              </span>
            </div>

            <h1 className="text-3xl font-bold text-primary mb-6">
              {singleBlog.blogTitle}
            </h1>

            <div
              className="no-tailwind prose max-w-none mb-2 text-wrap"
              dangerouslySetInnerHTML={{ __html: singleBlog.description }}
            />
          </div>
        </article>
      </div>
    </div>
  );
}

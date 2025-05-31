/* eslint-disable @typescript-eslint/no-explicit-any */
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

interface Blog {
  _id: string;
  blogTitle: string;
  description: string;
  banner: string | StaticImageData;
}
const baseImageUrl: any = process.env.NEXT_PUBLIC_IMAGE_URL;

export default function BlogCard({ blog }: { blog: Blog }) {
  const router = useRouter();
  return (
    <>
      <div
        key={blog._id}
        onClick={() => router.push(`/blogs/${blog._id}`)}
        className="relative w-full h-auto p-4 md:p-6 lg:p-6 xl:p-7 bg-[#E7F1F8] rounded-lg shadow-sm hover:shadow-md border border-gray-200 cursor-pointer transition-shadow duration-200"
      >
        <div className="relative w-full h-40 object-fill">
          <Image
            src={baseImageUrl + blog.banner}
            alt={blog.description}
            fill
            style={{ objectFit: "cover" }}
            priority={false}
          />
        </div>
        <div className="p-4 flex flex-col justify-between">
          <p className="text-xl text-primary font-bold mb-2">
            {blog.blogTitle}
          </p>
          <div
            dangerouslySetInnerHTML={{ __html: blog.description.slice(0, 140) }}
          />
        </div>
      </div>
    </>
  );
}

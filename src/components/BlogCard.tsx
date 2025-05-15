import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

interface Blog {
  id: string;
  title: string;
  summary: string;
  image: string | StaticImageData;
}

export default function BlogCard({ blog }: { blog: Blog }) {
  const router = useRouter();
  return (
    <>
      <div
        key={blog.id}
        onClick={() => router.push(`/blogs/${blog.id}`)}
        className="relative w-full h-auto p-4 md:p-6 lg:p-6 xl:p-7 bg-[#E7F1F8] rounded-lg shadow-sm hover:shadow-md border border-gray-200 cursor-pointer transition-shadow duration-200"
      >
        <div className="relative w-full h-40 object-fill">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            style={{ objectFit: "cover" }}
            priority={false}
          />
        </div>
        <div className="p-4 flex flex-col justify-between">
          <h3 className="text-primary font-semibold mb-2">{blog.title}</h3>
          <p className="text-sm text-gray-700">{blog.summary}</p>
        </div>
      </div>
    </>
  );
}

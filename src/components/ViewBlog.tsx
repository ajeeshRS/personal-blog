import { Link, useLocation } from "react-router-dom";
import { ChevronsLeft } from "lucide-react";
import { timeAgo } from "../utils/utils";

export default function ViewBlog() {
  const location = useLocation();

  const { blog } = location.state;

  return (
    <div className="max-w-4xl mx-auto py-20 font-oxygen">
      <div className="mb-8 flex justify-between items-center md:px-0 px-5">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-[#3D7FDC] hover:underline"
        >
          <ChevronsLeft size={16} className="mr-1" />
          Back to Blogs
        </Link>
      </div>

      <article className="bg-white p-8">
        <h1 className="md:text-4xl text-3xl text-pretty font-crimson font-semibold text-[#3D7FDC] mb-4">
          {blog?.title}
        </h1>

        <div className="flex gap-2 mb-8 flex-wrap">
          {blog?.tags.map((tag: string) => (
            <span
              key={tag}
              className="inline-flex items-center px-3 py-1 rounded text-xs font-medium bg-neutral-100 text-neutral-800"
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          className="my-4 prose py-10 min-w-full text-[#555555]"
          dangerouslySetInnerHTML={{ __html: blog?.blogContent ?? "" }}
        />
        <div className="w-full h-[1px] bg-neutral-200"></div>

        <div className="mt-8 space-y-1 text-xs text-gray-500 font-oxygen">
          <p>Posted {timeAgo(blog?.createdAt as string)}</p>
          <p>{new Date(blog?.createdAt as string).toDateString()}</p>
        </div>
      </article>
    </div>
  );
}

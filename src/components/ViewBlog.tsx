import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function ViewBlog() {
  const location = useLocation();

  const { blog } = location.state;

  return (
    <div className="max-w-4xl mx-auto py-20">
      <div className="mb-8 flex justify-between items-center md:px-0 px-5">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft size={16} className="mr-1" />
          Back to Blogs
        </Link>
      </div>

      <article className="bg-white p-8">
        <h1 className="md:text-4xl text-3xl text-pretty font-bold text-gray-900 mb-4">
          {blog?.title}
        </h1>

        <div className="flex gap-2 mb-8">
          {blog?.tags.map((tag: string) => (
            <span
              key={tag}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-neutral-100 text-neutral-800"
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          className="my-4 prose py-10 min-w-full"
          dangerouslySetInnerHTML={{ __html: blog?.blogContent ?? "" }}
        />
        <div className="w-full h-[1px] bg-neutral-200"></div>

        <div className="mt-8 text-xs text-gray-500">
          Published on {new Date(blog?.createdAt as string).toDateString()}
        </div>
      </article>
    </div>
  );
}

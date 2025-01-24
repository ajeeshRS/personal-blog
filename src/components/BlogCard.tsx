import { motion } from "motion/react";
import { Blog } from "../App";
import { useNavigate } from "react-router";
interface Props {
  blog: Blog | null;
}
function BlogCard({ blog }: Props) {
  const navigate = useNavigate();
  return (
    <motion.div
      key={0}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "backIn" }}
      onClick={() => navigate(`/${blog?._id}`)}
      className="w-full flex flex-col items-start justify-start shadow-md p-6 rounded-xl space-y-2 cursor-pointer hover:bg-neutral-50"
    >
      <p className="font-semibold">{blog?.title}</p>
      <div className="w-full flex flex-wrap gap-2 items-center max-w-[100%]">
        {blog?.tags.map((t: string, i: number) => (
          <p
            className="text-xs bg-neutral-100 rounded-lg px-2 py-1 w-fit"
            key={i}
          >
            {t}
          </p>
        ))}
      </div>
      <div className="w-full flex justify-end">
        <p className="text-xs text-neutral-600">
          Published on {new Date(blog?.createdAt as string).toDateString()}
        </p>
      </div>
    </motion.div>
  );
}

export default BlogCard;

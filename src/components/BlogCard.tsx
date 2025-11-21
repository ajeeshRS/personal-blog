import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { timeAgo } from "../utils/utils";
import { Blog } from "../assets/blogContent";

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
      onClick={() => navigate(`/${blog?._id}`, { state: { blog } })}
      className="w-full flex items-center justify-between border md:p-6 py-6 px-3 space-y-2 cursor-pointer hover:bg-neutral-50"
    >
      
      <p className="font-crimson md:text-xl text-base font-semibold text-[#3D7FDC]">
        {blog?.title}
      </p>
       <p className="md:text-sm text-xs text-neutral-400 font-oxygen ">
          {timeAgo(blog?.createdAt as string)}
        </p>

    </motion.div>
  );
}

export default BlogCard;

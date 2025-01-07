import { motion } from "motion/react";
function BlogCard() {
  const blog = {
    tags: [],
  };
  return (
    <motion.div
      key={0}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "backIn" }}
      className="w-full flex flex-col items-start justify-start shadow-md p-6 rounded-xl space-y-2 cursor-pointer hover:bg-neutral-50"
    >
      <p className="font-semibold">{"Title"}</p>
      <p className="text-neutral-500 text-sm">{"sneak peak"}</p>
      <div className="w-full flex flex-wrap gap-2 items-center max-w-[100%]">
        {blog.tags.map((t: string, i: number) => (
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
          Published on {new Date('Date').toDateString()}
        </p>
      </div>
    </motion.div>
  );
}

export default BlogCard;

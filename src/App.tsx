import { useEffect, useState } from "react";
import BlogCard from "./components/BlogCard";
import Footer from "./components/Footer";
import { motion } from "motion/react";

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs([]);
  }, []);
  return (
    <>
      <div className="flex flex-col items-center justify-between min-h-[100vh]">
        <div className="w-full flex flex-col items-start py-20 space-y-3 md:px-80 px-5">
          <motion.h3
            className="font-bold font-poppins text-3xl text-neutral-850"
          >
            Blogs by ajeesh
          </motion.h3>
          <motion.p
            className="text-sm text-neutral-500 font-inter md:w-1/2 "
          >
            Here, I share solutions to challenges I&apos;ve encountered during
            my software development journey.
          </motion.p>
          <motion.div className="flex flex-col w-full space-y-5 pt-5">
            {blogs.map(() => (
              <BlogCard />
            ))}
            <div className="flex w-full items-center justify-center">
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="text-xs text-neutral-400 font-inter"
              >
                {blogs.length === 0 ? "no blogs added yet." : "no more blogs"}
              </motion.p>
            </div>
          </motion.div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

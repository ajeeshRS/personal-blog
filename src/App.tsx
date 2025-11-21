import BlogCard from "./components/BlogCard";
import { motion } from "motion/react";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";
import { blogs } from "./assets/blogContent";

function App() {
  return (
    <>
      <div className="flex items-start md:space-x-5 h-[100vh]">
        <aside className="w-[fit] px-16 h-[100vh] md:flex hidden items-center bg-blue-50 ">
          <div className="h-full flex flex-col justify-center">
            <motion.h3 className="font-semibold font-crimson text-3xl text-black flex items-center space-x-2">
              <span>ajeesh</span>
            </motion.h3>
            <Link to={"https://x.com/ajeeshRS_"}>
              <div className="bg-black text-white text-nowrap w-fit flex items-center space-x-1 text-xs font-oxygen font-medium p-1">
                <FaXTwitter className="w-3 h-3" />
                <span className="">Follow @ajeeshRS_</span>
              </div>
            </Link>
          </div>
        </aside>
        <div className="w-full flex flex-col items-start justify-between py-20 space-y-3 md:px-20 max-w-4xl px-5 bg-white h-[100vh] overflow-y-scroll">
          <div className="flex w-full flex-col items-start space-y-3">
            <motion.h3 className="font-semibold font-crimson text-7xl text-black flex items-center space-x-2">
              <span>Blogs</span>
            </motion.h3>
            <motion.p className="text-md text-neutral-500 font-oxygen md:w-1/2 ">
              Writing about web2 and web3 stuffs.
            </motion.p>
            <motion.div className="flex flex-col w-full space-y-5 pt-5">
              {blogs?.map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
              ))}
              <div className="flex w-full items-center justify-center">
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="text-xs text-neutral-400 font-inter"
                >
                  {blogs?.length === 0 && "soon."}
                </motion.p>
              </div>
            </motion.div>
          </div>

          <div className="w-full px-3  md:hidden flex items-center ">
            <div className="h-full flex flex-col justify-center">
              <motion.h3 className="font-semibold font-crimson text-3xl text-black flex items-center space-x-2">
                <span>ajeesh</span>
              </motion.h3>
              <Link to={"https://x.com/ajeeshRS_"}>
                <div className="bg-black text-white w-fit flex items-center space-x-1 text-xs font-oxygen font-medium p-1">
                  <FaXTwitter className="w-3 h-3" />
                  <span className="">Follow @ajeeshRS_</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;

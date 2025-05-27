// import { useEffect, useState } from "react";
import BlogCard from "./components/BlogCard";
import Footer from "./components/Footer";
import { motion } from "motion/react";
// import { API } from "./config/axios";
import { NotebookPen } from "lucide-react";

export interface Blog {
  _id: string;
  title: string;
  blogContent: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

function App() {
  // const blogs: Blog[] = [];

  const blogs: Blog[] = [
    {
      _id: "1",
      title:
        "How I Simplified Node.js + TypeScript Setup with My First NPM Package",
      blogContent: `
    <p>Setting up a Node.js app with TypeScript had always been a repetitive task for me. Every time I started a new project, I found myself doing the same steps—configuring <code>tsconfig.json</code>, setting up <code>nodemon</code> or <code>ts-node-dev</code> for live reload, and managing folder structure.</p>
    <p>To save time, I decided to build a simple NPM package called <strong><code>add-node-ts</code></strong> that could automate this setup. With a single command, it bootstraps a ready-to-go Node.js project with TypeScript, complete with live restart on code changes.</p>
    <p>I published the package to NPM and kind of forgot about it. But when I checked the package page 3–4 days later, I was surprised to see it had <strong>90 weekly downloads</strong> later 100+. <br/> <img style="width: 300px; height: auto;" src="https://pbs.twimg.com/media/GrYU5UuakAAsxLw?format=png&name=900x900"/> <br/> It felt amazing to know that others found it useful too!</p>
    <p>Since then, the weekly downloads have stabilized to around <strong>20–25 downloads</strong>, but the experience taught me how impactful even a small utility can be for the developer community. It was also a huge motivation to continue building and sharing tools that solve real problems.</p>
    <p>If you're tired of repeating the same setup steps for every Node.js + TypeScript project, give <a style={fontWeight:"bold"} href="https://www.npmjs.com/package/add-node-ts">add-node-ts</a> a try!</p>
  `,
      tags: [
        "Node.js",
        "TypeScript",
        "NPM",
        "Developer Tools",
        "Open Source",
        "Productivity",
      ],
      createdAt: "2025-05-27T09:00:00.000Z",
      updatedAt: "2025-05-27T09:00:00.000Z",
      __v: 0,
    },
  ];

  // const [blogs, setBlogs] = useState<Blog[]>([]);

  // const fetchBlogs = async () => {
  //   try {
  //     const res = await API.get("/");
  //     setBlogs(res.data.blogs);
  //   } catch (err) {
  //     console.error("error fetching blogs : ", err);
  //   }
  // };

  // useEffect(() => {
  //   fetchBlogs();
  // }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-between min-h-[100vh]">
        <div className="w-full flex flex-col items-start py-20 space-y-3 md:px-80 px-5">
          <motion.h3 className="font-bold font-poppins text-3xl text-neutral-850 flex items-center space-x-2">
            <NotebookPen className="w-5 h-5" />
            <span>Blogs by ajeesh</span>
          </motion.h3>
          <motion.p className="text-sm text-neutral-500 font-inter md:w-1/2 ">
            Here, I share blogs on software development, tech insights, and
            personal thoughts.
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
        <Footer />
      </div>
    </>
  );
}

export default App;

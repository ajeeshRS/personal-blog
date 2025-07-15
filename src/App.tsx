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
      _id: "2",
      title:
        "How I Caught a Malicious Upwork Test Project Before It Did Damage",
      blogContent: `
                    <p><strong>TL;DR:</strong> I received a "test project" via Upwork that contained obfuscated malicious code. I caught it early, didn't run it, and safely cleaned up my system. Here's how I handled it and how you can protect yourself too.</p>

                <h2>🚩 The Red Flags</h2>
                <ul>
                  <li>Client sent a GitHub repo with vague instructions: "Just run the project and let me know once it's working."</li>
                  <li>Package list included unusual and deprecated packages like <code>request</code>, <code>execp</code>, and <code>fs</code>.</li>
                  <li>A file deep in the backend code had large chunks of obfuscated JavaScript.</li>
                </ul>

                <h2>🧠 What I Did Immediately</h2>
                <ol>
                  <li>Cloned the repo — but <strong>did not run</strong> it blindly.</li>
                  <li>Inspected <code>package.json</code> and removed any suspicious dependencies.</li>
                  <li>Manually opened backend files and spotted base64-encoded strings, system calls, and encoded HTTP requests.</li>
                  <li>Used <code>grep</code> to scan for keywords like <code>child_process</code>, <code>exec</code>, and <code>request</code>.</li>
                  <li>Client blocked me on Upwork right after I asked for clarity — which confirmed the suspicion.</li>
                </ol>

                <h2>🧹 How I Cleaned It Up</h2>
                  <p>
                    -&gt; npm cache clean --force
                  </p>          
                   <p>
                    -&gt; rm -rf ~/.npm
                  </p>       
                <p>This cleared my system’s npm cache to make sure no malicious packages stayed behind. I also deleted the entire project directory.</p>

                <h2>🔐 Lessons for Every Developer</h2>
                <ul>
                  <li><strong>Always audit a test repo before running it</strong> — especially from unknown clients.</li>
                  <li>If you see encoded strings, obfuscated loops, or unexpected network calls — be suspicious.</li>
                  <li><strong>Use <code>grep</code></strong> or tools like <code>esprima</code> to scan files for dangerous patterns.</li>
                  <li>Clear your cache and delete the project if anything looks shady.</li>
                  <li>If something feels off — <strong>trust your gut</strong>.</li>
                </ul>

                <h2>📢 Spread the Word</h2>
                <p>Freelancers and junior devs are often targeted for these “test projects.” Don’t let curiosity or eagerness override caution.</p>
                <p>Share this. Help others avoid getting caught by these tactics.</p>

  `,
      tags: [
        "Security",
        "Node.js",
        "Freelancing",
        "NPM",
        "Developer Tools",
        "Open Source",
      ],
      createdAt: "2025-07-16T09:00:00.000Z",
      updatedAt: "2025-07-16T09:00:00.000Z",
      __v: 0,
    },
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

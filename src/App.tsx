import Footer from "./components/Footer";
import { motion } from "motion/react";

function App() {
  const comingSoonText = "Coming soon.";

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeIn" },
  };
  return (
    <>
      <div className="flex flex-col items-center justify-between min-h-[100vh]">
        <div className="w-full flex flex-col items-start py-20 space-y-3 md:px-80 px-5">
          <motion.h3
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="font-bold font-poppins text-3xl text-neutral-850"
          >
            Blogs by ajeesh
          </motion.h3>
          <motion.p
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="text-sm text-neutral-500 font-inter md:w-1/2 "
          >
            Here, I share solutions to challenges I&apos;ve encountered during
            my software development journey.
          </motion.p>
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="w-full flex justify-center items-center py-20"
          >
            {comingSoonText.split("").map((t, i) => (
              <motion.p
                variants={item}
                key={i}
                className="text-xl font-semibold text-neutral-300 font-inter"
              >
                {t}
              </motion.p>
            ))}
          </motion.div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

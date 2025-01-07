import { motion } from "motion/react";
function Footer() {
  return (
    <footer
      className={`bg-text-neutral-100 w-full h-fit py-2 font-inter text-neutral-500 border-t border-t-gray-100 shadow-md flex flex-col justify-center items-center`}
    >
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 100 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
        className="font-light"
      >
        Made with &lt;3 by
        <a
          className="hover:underline px-1"
          href={"https://www.ajeeshrs.online"}
        >
          <span className="underline">ajeesh</span>
        </a>
      </motion.p>
    </footer>
  );
}

export default Footer;

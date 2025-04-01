import { Link } from "react-router";
import { TbSpider } from "react-icons/tb";
import { motion } from "motion/react";
import { FaArchive } from "react-icons/fa";

export default function Navbar({ displaySavedArticles }) {
  // This component is a sticky navbar that appears at the top of the page.

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-700 h-16 flex items-center px-5 mb-10 text-white sticky top-0 select-none z-10 justify-between"
    >
      <Link to={"/"} className="font-medium text-3xl">
        WikiScraper
        <TbSpider className="inline ml-3" />
      </Link>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          to={"/saved_articles"}
          className="font-medium text-1xl flex justify-center items-center gap-2 bg-blue-400 max-sm:w-10 w-40 h-10 rounded-lg hover:bg-blue-500 transition duration-300"
        >
          <FaArchive />
          <span className="max-sm:hidden">Saved Articles</span>
        </Link>
      </motion.div>
    </motion.div>
  );
}

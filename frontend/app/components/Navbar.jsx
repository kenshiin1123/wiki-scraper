import { Link } from "react-router";
import { TbSpider } from "react-icons/tb";
import { motion } from "motion/react";

export default function Navbar() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-700 h-16 flex items-center px-5 mb-10 text-white sticky top-0 select-none z-10"
    >
      <Link to={"/"} className="font-medium text-3xl">
        WikiScraper
        <TbSpider className="inline ml-3" />
      </Link>
    </motion.div>
  );
}

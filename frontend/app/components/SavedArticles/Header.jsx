import { motion } from "motion/react";

export default function Header() {
  return (
    <motion.h1
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="text-center text-3xl mb-5 "
    >
      Saved Articles
    </motion.h1>
  );
}

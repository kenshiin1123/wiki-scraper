import { motion } from "motion/react";

export default function DisplayAnimatedDiv({ children, article }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0, scale: 0.5 }}
      key={article}
      className=" absolute top-1 flex w-full flex-col items-center justify-center bg-opacity-50 backdrop-blur-md "
    >
      {children}
    </motion.div>
  );
}

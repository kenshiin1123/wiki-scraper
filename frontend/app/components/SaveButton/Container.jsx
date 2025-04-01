import { motion } from "motion/react";
export default function Container({ children }) {
  return (
    <motion.div
      key="container"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full flex justify-center items-center"
    >
      {children}
    </motion.div>
  );
}

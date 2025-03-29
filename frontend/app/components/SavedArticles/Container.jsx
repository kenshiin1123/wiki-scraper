import { AnimatePresence, motion } from "motion/react";
import React from "react";

export default function Container({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex mx-auto w-full justify-center items-center"
    >
      {...children}
    </motion.div>
  );
}
